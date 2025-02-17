import AuthTemplate from "../../components/module/Auth/AuthTemplate";
import LoginForm from "../../components/module/Auth/LoginForm";

const LoginPage = () => {
  return (
    <>
      <AuthTemplate isLogin>
        <LoginForm />
      </AuthTemplate>
    </>
  );
};

export default LoginPage;
