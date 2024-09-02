import { useContext, useEffect } from "react";

import { supabase } from "../api/supabase";
import { AuthContext } from "../contexts/AuthContext";
import { mapUser } from "../utils/mapUser";

export function useFetchUser() {
  const { setUser, setIsLoading } = useContext(AuthContext);

  useEffect(() => {
    async function getUser() {
      setIsLoading(true);
      const { data } = await supabase.auth.getUser();

      if (data.user) {
        const user = mapUser(data.user);
        setUser(user);
        setIsLoading(false);
      }
    }

    getUser();
  }, [setUser, setIsLoading]);
}
