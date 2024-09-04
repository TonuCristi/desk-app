import { Link } from "react-router-dom";
import ForgotPasswordForm from "../components/auth/forgotPassword/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <div className="m-auto flex w-full flex-col items-center xsm:w-5/6 sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2">
      <h3 className="mb-8 text-center text-2xl font-semibold">
        Forgot your password?
      </h3>

      <div className="mb-2 w-full">
        <ForgotPasswordForm />
      </div>

      <Link to="/login" className="border-b border-primary">
        Go to login
      </Link>
    </div>
  );
}
