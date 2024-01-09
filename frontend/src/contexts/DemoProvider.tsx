import { createContext, useContext, useMemo, useState } from "react";
import { useQuery } from "react-query";

import { IDemo, IDemoContext } from "@/interfaces";
import Loader from "@/components/Loader";

export const DemoContext = createContext({} as IDemoContext);

export const useDemoContext = () => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error("useDemoContext must be used within the DemoProvider");
  }
  return context;
};

const DemoProvider = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [demo, setDemo] = useState<IDemo>({
    id: 1,
    name: "",
    description: "",
    createdAt: "",
    updatedAt: "",
  } as IDemo);

  if (isLoading) {
    return <Loader fullPage={true} />;
  }

  const value = useMemo(
    () => ({
      demo,
      setDemo,
      isLoading,
      setIsLoading,
    }),
    [demo, isLoading]
  );

  return (
    <DemoContext.Provider value={value}>{props.children}</DemoContext.Provider>
  );
};

export default DemoProvider;
