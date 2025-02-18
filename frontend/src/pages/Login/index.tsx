import AuthTemplate from "../../components/module/Auth/AuthTemplate";
import LoginForm from "../../components/module/Auth/LoginForm";

const LoginPage = () => (
  <AuthTemplate isLogin>
    <LoginForm />
  </AuthTemplate>
);

export default LoginPage;
