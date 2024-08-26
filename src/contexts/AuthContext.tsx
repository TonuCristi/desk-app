import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import { User } from "../types/Auth.types";

type AuthContext = {
  token: string;
  user: User | undefined;
  isLoading: boolean;
  error: string;
  setToken: Dispatch<SetStateAction<string>>;
  setUser: Dispatch<SetStateAction<User | undefined>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
};

export const AuthContext = createContext<AuthContext>({
  token: "",
  user: undefined,
  isLoading: false,
  error: "",
  setToken: () => undefined,
  setUser: () => undefined,
  setIsLoading: () => undefined,
  setError: () => undefined,
});

type Props = {
  children: ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isLoading,
        error,
        setToken,
        setUser,
        setIsLoading,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
