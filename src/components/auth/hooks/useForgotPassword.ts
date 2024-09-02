import { supabase } from "../../../api/supabase";
import { ForgotPassword } from "../../../types/Auth.types";

export function useForgotPassword() {
  async function forgotPassword(email: string, cb: () => void) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5173/forgotPassword/",
    });

    cb();
  }

  return forgotPassword;
}
