import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type OwnProps = {
  onChange: (val: string | undefined) => void;
};

const AppInput: React.FC<OwnProps> = ({ onChange }) => {
  const [value, setValue] = useState<string>();

  useEffect(() => {
    onChange(value);
  }, [value, setValue]);

  return (
    <Input
      size="sm"
      border="none"
      placeholder="Filter..."
      sx={{
        _focus: {
          outline: "none",
          boxShadow: "none",
        },
      }}
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
};

export default AppInput;
