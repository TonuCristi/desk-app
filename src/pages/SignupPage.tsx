import AuthSwitch from "../components/auth/common/AuthSwitch";
import SignupForm from "../components/auth/signup/SignupForm";

export default function SignupPage() {
  return (
    <div className="m-auto flex w-full flex-col items-center xsm:w-5/6 sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2">
      <h3 className="text-center text-2xl font-semibold">Welcome my friend!</h3>
      <p className="mb-8 text-center">We wish you a nice desk!</p>

      <div className="mb-4 w-full">
        <SignupForm />
      </div>

      <AuthSwitch to="login" />
    </div>
  );
}
