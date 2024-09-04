import LoginForm from "../components/auth/login/LoginForm";
import AuthSwitch from "../components/auth/common/AuthSwitch";

export default function LoginPage() {
  return (
    <div className="m-auto flex w-full flex-col items-center xsm:w-5/6 sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2">
      <h3 className="text-center text-2xl font-semibold">Welcome back!</h3>
      <p className="mb-8 text-center">We wish you a nice desk!</p>

      <div className="mb-4 w-full">
        <LoginForm />
      </div>

      <AuthSwitch to="signup" />
    </div>
  );
}
