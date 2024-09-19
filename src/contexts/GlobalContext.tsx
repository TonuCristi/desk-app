import { createContext, Dispatch, SetStateAction, useState } from "react";
import { getToken } from "../utils/getToken";

type GlobalContext = {
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
};

export const GlobalContext = createContext<GlobalContext>({
  token: null,
  setToken: () => undefined,
});

export default function GlobalProvider() {
  const [token, setToken] = useState<string | null>(getToken());

  return (
    <GlobalContext.Provider value={{ token, setToken }}>
      GlobalProvider
    </GlobalContext.Provider>
  );
}
