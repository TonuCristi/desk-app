import LoginForm from "../components/auth/login/LoginForm";
import AuthSwitch from "../components/auth/common/AuthSwitch";

export default function LoginPage() {
  return (
    <div className="w-full xsm:w-5/6 sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2 m-auto flex flex-col items-center">
      <h3 className="font-semibold text-2xl text-center">Welcome back!</h3>
      <p className="mb-8 text-center">We wish you a nice desk!</p>

      <div className="mb-4 w-full">
        <LoginForm />
      </div>

      <AuthSwitch to="signup" />
    </div>
  );
}
