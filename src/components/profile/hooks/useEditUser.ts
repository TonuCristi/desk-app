import { useContext } from "react";
import { EditUser } from "../../../types/Auth.types";
import { AuthContext } from "../../../contexts/AuthContext";
import { AuthApi } from "../../../services/AuthApi";
import { mapUser } from "../../../utils/mapUser";

export function useEditUser() {
  const { error, isLoading, setIsLoading, setError, setUser } =
    useContext(AuthContext);

  function editUser(user: EditUser) {
    setIsLoading(true);
    AuthApi.editUser(user)
      .then((res) => {
        const user = mapUser(res);
        setUser(user);
        setError("");
      })
      .catch((err) => setError(err.response.data.message))
      .finally(() => setIsLoading(false));
  }

  return { isLoading, error, editUser };
}
