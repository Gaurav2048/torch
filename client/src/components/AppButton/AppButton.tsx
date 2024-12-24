import { Button, ButtonProps } from "@chakra-ui/react";
import { useState } from "react";

const AppButton: React.FC<ButtonProps> = ({ onClick, children, ...rest }) => {
  const [loading, setLoading] = useState(false);
  const handleClick = async (e: any) => {
    setLoading(true);
    await onClick?.(e);
    setLoading(false);
  };
  return (
    <Button {...rest} cursor="pointer" isLoading={loading}  onClick={handleClick}>
      {children}
    </Button>
  );
};

export default AppButton;
