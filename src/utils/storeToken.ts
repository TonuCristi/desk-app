export function storeToken(token: string) {
  return localStorage.setItem("token", token);
}
