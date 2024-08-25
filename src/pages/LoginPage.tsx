import AuthImage from "../components/auth/common/AuthImage";
import LoginForm from "../components/auth/login/LoginForm";
import Logo from "../components/common/Logo";
import AuthSwitch from "../components/auth/common/AuthSwitch";

export default function LoginPage() {
  return (
    <div className="h-full grid grid-cols-2 gap-8">
      <div className="relative flex items-center justify-center">
        <div className="absolute top-0 left-0">
          <Logo />
        </div>

        <div className="w-1/2 m-auto flex flex-col items-center">
          <h3 className="font-semibold text-2xl">Welcome back!</h3>
          <p className="mb-8">We wish you a nice desk!</p>

          <div className="mb-2 w-full">
            <LoginForm />
          </div>

          <AuthSwitch to="signup" />
        </div>
      </div>

      <AuthImage />
    </div>
  );
}
