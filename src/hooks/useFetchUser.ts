import { useContext, useEffect } from "react";

import { AuthContext } from "../contexts/AuthContext";
import { mapUser } from "../utils/mapUser";
import { AuthApi } from "../services/AuthApi";

export function useFetchUser() {
  const { setUser, setIsLoading } = useContext(AuthContext);

  useEffect(() => {
    function getUser() {
      setIsLoading(true);
      AuthApi.getLoggedUser()
        .then((res) => {
          const user = mapUser(res);
          setUser(user);
        })
        .finally(() => setIsLoading(false));
    }

    getUser();
  }, [setUser, setIsLoading]);
}
