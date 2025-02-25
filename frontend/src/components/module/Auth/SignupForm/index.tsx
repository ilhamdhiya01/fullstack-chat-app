import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import type { SignupFormData } from "../../../../constants/schema/SignupSchema";
import { SignupSchema } from "../../../../constants/schema/SignupSchema";
import { useAuth } from "../../../../hooks/auth";
import { signup } from "../../../../services/fetcher/auth";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { refetch } = useAuth();
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<SignupFormData>({
    mode: "onBlur",
    resolver: yupResolver(SignupSchema),
  });

  const signupMutation = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      toast.success("Account created successfully");
      refetch();
      reset();
    },
    onError: (error: any) => {
      toast.error(error.response?.data.message);
    },
  });

  const onSubmit = (data: SignupFormData) => {
    signupMutation.mutateAsync(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        {...register("fullName")}
        label="Full Name"
        inputPrefix={<User width={18} height={18} />}
        fullWidth
        isRequired
        placeholder="Enter your full name"
        inputVariant={`${errors.fullName ? "error" : "default"}`}
        errorMessage={errors.fullName?.message}
      />
      <Input
        {...register("email")}
        label="Email"
        inputPrefix={<Mail width={18} height={18} />}
        fullWidth
        isRequired
        placeholder="Enter your email"
        inputVariant={`${errors.email ? "error" : "default"}`}
        errorMessage={errors.email?.message}
      />
      <Input
        {...register("password")}
        type={showPassword ? "text" : "password"}
        label="Password"
        inputPrefix={<Lock width={18} height={18} />}
        placeholder="••••••••"
        inputVariant={`${errors.password ? "error" : "default"}`}
        inputSuffix={
          showPassword ? (
            <Eye width={18} height={18} />
          ) : (
            <EyeOff width={18} height={18} />
          )
        }
        suffixOnClick={() => setShowPassword(!showPassword)}
        fullWidth
        isRequired
        errorMessage={errors.password?.message}
      />
      <Button
        label="Create Account"
        fullWidth
        size="md"
        type="submit"
        isLoading={signupMutation.isPending}
      />
    </form>
  );
};

export default SignupForm;
