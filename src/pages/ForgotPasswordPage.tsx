import { Link } from "react-router-dom";
import ForgotPasswordForm from "../components/auth/forgotPassword/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <div className="w-full xsm:w-5/6 sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2 m-auto flex flex-col items-center">
      <h3 className="font-semibold text-2xl text-center mb-8">
        Forgot your password?
      </h3>

      <div className="mb-2 w-full">
        <ForgotPasswordForm />
      </div>

      <Link to="/login" className="border-b border-slate-950">
        Go to login
      </Link>
    </div>
  );
}
