import { useDisclosure, UseDisclosureProps } from "@chakra-ui/react";
import React from "react";

type AppHoverType = {
  children: (props: UseDisclosureProps) => React.ReactElement;
};

const AppHover: React.FC<AppHoverType> = ({ children }) => {
  const disclosureProps = useDisclosure();
  return <>{children(disclosureProps)}</>;
};

export default AppHover;
