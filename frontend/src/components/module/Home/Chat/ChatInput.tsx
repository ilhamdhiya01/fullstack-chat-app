/* eslint-disable no-underscore-dangle */
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Image, Send, X } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { MESSAGES } from "../../../../constants/queryKey";
import type { SendMessageFormData } from "../../../../constants/schema/SendMessageSchema";
import { SendMessageSchema } from "../../../../constants/schema/SendMessageSchema";
import { sendMessage } from "../../../../services/fetcher/message";
import useMessageStore from "../../../../stores/message/useMessageStore";
import Button from "../../../ui/Button";
import TextArea from "../../../ui/TextArea";

const ChatInput = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { userSelected, setMessages, messages } = useMessageStore();

  const queryClient = useQueryClient();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setImagePreview(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const { register, handleSubmit, reset, watch } = useForm<SendMessageFormData>(
    {
      mode: "onBlur",
      resolver: yupResolver(SendMessageSchema),
    },
  );

  const text = watch("text");

  const sendMessageMutation = useMutation({
    mutationFn: sendMessage,
    onSuccess: async (res) => {
      setMessages([...messages, res]);
      // Update react-query cache
      queryClient.setQueryData(
        [MESSAGES, userSelected?._id],
        (oldData: Array<MessageResponse> = []) => [...oldData, res],
      );
      reset();
      setImagePreview(null);
    },
    onError: (error: any) => {
      toast.error(error.response?.data.message);
    },
  });

  const onSubmit = (data: SendMessageFormData) => {
    sendMessageMutation.mutateAsync({
      text: data.text?.trim(),
      id: userSelected?._id,
      image: imagePreview,
    });
  };

  return (
    <>
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-lg border border-base-content/30"
            />
            <button
              onClick={removeImage}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
              flex items-center justify-center"
              type="button"
            >
              <X className="size-3" />
            </button>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="flex items-end gap-2">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageChange}
        />

        <Button
          type="button"
          variant="ghost"
          iconButton={<Image size={20} />}
          onClick={() => fileInputRef.current?.click()}
        />
        <div className="flex-1">
          <TextArea
            {...register("text")}
            fullWidth
            placeholder="Type a message..."
            className="h-5 placeholder:text-base-content/50"
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          iconButton={<Send size={22} />}
          isDisabled={
            sendMessageMutation.isPending || (!imagePreview && !text?.trim())
          }
        />
      </form>
    </>
  );
};

export default ChatInput;
