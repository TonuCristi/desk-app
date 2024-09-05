import { supabase } from "../../../api/supabase";

export function useForgotPassword() {
  async function forgotPassword(email: string, cb: () => void) {
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5173/forgotPassword/",
    });

    cb();
  }

  return forgotPassword;
}
