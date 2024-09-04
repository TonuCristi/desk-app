import { Link } from "react-router-dom";
import ResetPasswordForm from "../components/auth/resetPassword/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <div className="m-auto flex w-full flex-col items-center xsm:w-5/6 sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2">
      <h3 className="mb-8 text-center text-2xl font-semibold">
        Reset password
      </h3>

      <div className="mb-2 w-full">
        <ResetPasswordForm />
      </div>

      <Link to="/login" className="border-b border-primary">
        Go to login
      </Link>
    </div>
  );
}
