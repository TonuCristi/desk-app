export function checkAuthPaths(pathname: string) {
  return (
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/forgotPassword" ||
    pathname === "/resetPassword"
  );
}
