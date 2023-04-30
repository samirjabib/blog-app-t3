import { useState } from "react";
import type { PropsWithChildren } from "react";

import { Provider } from "./context";

export default function GlobalContextProvider({ children }: PropsWithChildren) {
  const [isWriteModalOpen, setIsWriteModalOpen] = useState<boolean>(false);

  return <Provider value={{ isWriteModalOpen, setIsWriteModalOpen }}>{children}</Provider>;
}
