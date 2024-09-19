import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import { User } from "../types/Auth.types";

type AuthContext = {
  user: User | undefined;
  isLoading: boolean;
  error: string;
  setUser: Dispatch<SetStateAction<User | undefined>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
};

export const AuthContext = createContext<AuthContext>({
  user: undefined,
  isLoading: false,
  error: "",
  setUser: () => undefined,
  setIsLoading: () => undefined,
  setError: () => undefined,
});

type Props = {
  children: ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        setUser,
        setIsLoading,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
