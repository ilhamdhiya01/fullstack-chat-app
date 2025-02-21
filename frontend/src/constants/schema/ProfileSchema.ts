import * as Yup from "yup";

export const ProfileSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is required"),
  profilePic: Yup.string(),
});

export type ProfileFormData = Yup.InferType<typeof ProfileSchema>;
