import * as Yup from "yup";

export const SendMessageSchema = Yup.object().shape({
  text: Yup.string().trim(),
  image: Yup.string(),
});

export type SendMessageFormData = Yup.InferType<typeof SendMessageSchema>;
