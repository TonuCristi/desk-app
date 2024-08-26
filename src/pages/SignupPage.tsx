import AuthSwitch from "../components/auth/common/AuthSwitch";
import SignupForm from "../components/auth/signup/SignupForm";

export default function SignupPage() {
  return (
    <div className="w-full xsm:w-5/6 sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2 m-auto flex flex-col items-center">
      <h3 className="font-semibold text-2xl text-center">Welcome my friend!</h3>
      <p className="mb-8 text-center">We wish you a nice desk!</p>

      <div className="mb-4 w-full">
        <SignupForm />
      </div>

      <AuthSwitch to="login" />
    </div>
  );
}
