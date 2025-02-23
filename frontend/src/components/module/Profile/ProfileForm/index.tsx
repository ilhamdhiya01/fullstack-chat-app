import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { Mail, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import type { ProfileFormData } from "../../../../constants/schema/ProfileSchema";
import { ProfileSchema } from "../../../../constants/schema/ProfileSchema";
import { useAuth } from "../../../../hooks/auth";
import { updateProfile } from "../../../../services/fetcher/auth";
import { compressImage } from "../../../../utils/helpers";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import Avatar from "../Avatar";

const ProfileForm = () => {
  const { userAuthenticated, refetch } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(true);
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ProfileFormData>({
    mode: "onBlur",
    resolver: yupResolver(ProfileSchema),
    defaultValues: {
      fullName: userAuthenticated?.fullName || "",
    },
  });

  useEffect(() => {
    if (userAuthenticated) {
      reset({
        fullName: userAuthenticated.fullName,
      });
    }
  }, [userAuthenticated, reset]);

  const updateProfileMutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      toast.success("Profile updated successfully");
      refetch();
    },
    onError: (error: any) => {
      toast.error(error.response?.data.message);
    },
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result as string;
      const compressedImage = await compressImage(base64Image);
      setSelectedImg(compressedImage);
    };
  };

  const onSubmit = (data: ProfileFormData) => {
    updateProfileMutation.mutateAsync({
      ...data,
      profilePic: selectedImg || "",
    });
  };

  return (
    <>
      <Avatar
        handleImageUpload={handleImageUpload}
        picture={selectedImg || userAuthenticated?.profilePic || "/avatar.png"}
        disabled={!isEditing}
        isLaoding={updateProfileMutation.isPending}
      />
      <div className="space-y-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            {...register("fullName")}
            errorMessage={errors.fullName?.message}
            label="Full Name"
            fullWidth
            inputPrefix={<User width={18} height={18} />}
            disabled={!isEditing}
          />
          <Input
            label="Email Address"
            fullWidth
            inputPrefix={<Mail width={18} height={18} />}
            disabled
            value={userAuthenticated?.email}
          />
          {isEditing ? (
            <Button
              type="submit"
              label="Save Changes"
              isLoading={updateProfileMutation.isPending}
              fullWidth
            />
          ) : (
            <Button type="button" label="Edit" onClick={handleEdit} fullWidth />
          )}
        </form>
      </div>
    </>
  );
};

export default ProfileForm;
