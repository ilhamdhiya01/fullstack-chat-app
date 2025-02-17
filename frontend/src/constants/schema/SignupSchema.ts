import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters"),
});

export type SignupFormData = Yup.InferType<typeof SignupSchema>;
