import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import useAuth from "../../../../hooks/auth";
import {
  LoginSchema,
  LoginFormData,
} from "../../../../constants/schema/LoginSchema";
import { login } from "../../../../services/fetcher/auth";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { refetch } = useAuth();
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: "onBlur",
    resolver: yupResolver(LoginSchema),
  });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success("Login successful");
      refetch();
      reset();
    },
    onError: (error: any) => {
      toast.error(error.response?.data.message);
    },
  });

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutateAsync(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
          label="Login"
          fullWidth
          size="md"
          type="submit"
          isLoading={loginMutation.isPending}
        />
      </form>
    </>
  );
};

export default LoginForm;
