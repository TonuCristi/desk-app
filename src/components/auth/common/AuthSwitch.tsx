import { Link } from "react-router-dom";

type Props = {
  to: "login" | "signup";
};

export default function AuthSwitch({ to }: Props) {
  return (
    <div className="flex gap-1.5 flex-col items-center xssm:flex-row">
      <p>{`${to === "login" ? "Already" : "Don't"} have an account?`}</p>

      <Link
        to={to === "login" ? "/login" : "/signup"}
        className="border-b border-slate-950"
      >
        {to === "login" ? "Login" : "Sign up"}
      </Link>
    </div>
  );
}
