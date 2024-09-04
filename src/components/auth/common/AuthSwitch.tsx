import { Link } from "react-router-dom";

type Props = {
  to: "login" | "signup";
};

export default function AuthSwitch({ to }: Props) {
  return (
    <div className="flex flex-col items-center gap-1.5 xssm:flex-row">
      <p>{`${to === "login" ? "Already" : "Don't"} have an account?`}</p>

      <Link
        to={to === "login" ? "/login" : "/signup"}
        className="border-b border-primary"
      >
        {to === "login" ? "Login" : "Sign up"}
      </Link>
    </div>
  );
}
