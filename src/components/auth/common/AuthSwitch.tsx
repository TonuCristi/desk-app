import { Link } from "react-router-dom";

type Props = {
  to: "login" | "signup";
};

export default function AuthSwitch({ to }: Props) {
  return (
    <div className="flex gap-1.5 self-center">
      <p className="">{`${
        to === "login" ? "Already" : "Don't"
      } have an account?`}</p>

      <Link to="/signup" className="border-b border-slate-950">
        {to === "login" ? "Login" : "Sign up"}
      </Link>
    </div>
  );
}
