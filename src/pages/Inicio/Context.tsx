import React, { useState } from "react";
import { PostUnico } from "../../models/Post";
export const Context = React.createContext<PostUnico|null>(null);

interface Props {
  children: React.ReactNode;
}
export default function ContextProvider({ children }: Props) {
  const [editId, setEditId] = useState<PostUnico>({
    id: 0,
    useriId: 0,
    title: "",
    body: "",
  });
  return (
    <Context.Provider value={{ editId, setEditId } as any}>
      {children}
    </Context.Provider>
  );
}
