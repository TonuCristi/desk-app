export function useForgotPassword() {
  async function forgotPassword(email: string, cb: () => void) {
    cb();
  }

  return forgotPassword;
}
