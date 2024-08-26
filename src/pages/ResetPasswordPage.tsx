import { Link } from "react-router-dom";
import ResetPasswordForm from "../components/auth/resetPassword/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <div className="w-full xsm:w-5/6 sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2 m-auto flex flex-col items-center">
      <h3 className="font-semibold text-2xl text-center mb-8">
        Reset password
      </h3>

      <div className="mb-2 w-full">
        <ResetPasswordForm />
      </div>

      <Link to="/login" className="border-b border-slate-950">
        Go to login
      </Link>
    </div>
  );
}
