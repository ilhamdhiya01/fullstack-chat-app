import React from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../../constants/routes";
import AuthImagePattern from "../AuthImagePattern";
import AuthLogo from "../AuthLogo";

interface AuthTemplateProps {
  children: React.ReactNode;
  isLogin?: boolean;
}

const AuthTemplate = ({ children, isLogin = false }: AuthTemplateProps) => (
  <div className="min-h-screen grid lg:grid-cols-2">
    {/* Left Side */}
    <div className="flex flex-col justify-center items-center p-6 sm:p-12">
      <div className="w-full max-w-md space-y-4">
        {/* Logo */}
        <AuthLogo />
        {/* Form */}
        {children}
        <div className="text-center">
          <p className="text-base-content/60">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <Link
              to={isLogin ? ROUTES.SIGNUP : ROUTES.LOGIN}
              className="text-primary ml-2"
            >
              {isLogin ? "Signup" : "Login"}
            </Link>
          </p>
        </div>
      </div>
    </div>

    {/* right side */}
    <AuthImagePattern
      title="Join our community"
      subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
    />
  </div>
);

export default AuthTemplate;
