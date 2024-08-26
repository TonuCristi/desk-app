import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type GlobalContext = {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
};

export const GlobalContext = createContext<GlobalContext>({
  token: "",
  setToken: () => undefined,
});

type Props = {
  children: ReactNode;
};

export default function GlobalProvider({ children }: Props) {
  const [token, setToken] = useState<string>("");

  return (
    <GlobalContext.Provider value={{ token, setToken }}>
      {children}
    </GlobalContext.Provider>
  );
}
