import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import { getToken } from "../utils/getToken";

type GlobalContext = {
  token: string | null;
  isLoading: boolean;
  error: string;
  setToken: Dispatch<SetStateAction<string | null>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
};

export const GlobalContext = createContext<GlobalContext>({
  token: null,
  isLoading: false,
  error: "",
  setToken: () => undefined,
  setIsLoading: () => undefined,
  setError: () => undefined,
});

type Props = {
  children: ReactNode;
};

export default function GlobalProvider({ children }: Props) {
  const [token, setToken] = useState<string | null>(getToken());
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  return (
    <GlobalContext.Provider
      value={{ token, isLoading, error, setToken, setIsLoading, setError }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
