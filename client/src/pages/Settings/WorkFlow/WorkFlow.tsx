import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import AppButton from "../../../components/AppButton";
import useAxios from "../../../hooks/useAxios";
import { v4 } from "uuid";

export const COLORS = [
  "#87CEFA",
  "#FFD1DC",
  "#98FF98",
  "#E6E6FA",
  "#FFDAB9",
  "#F08080",
  "#FFFACD",
  "#B0E0E6",
  "D3D3D3",
  "FFFFF0",
];

const WorkFlow: React.FC = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");

  const { fetchData } = useAxios({
    url: `/org/66beb38e168efaf09cb836bd/worktype`,
    method: "POST",
    data: {
      id: v4(),
      text,
      color,
    },
  });

  const changeColor = (color: string) => {
    setColor(color);
  };

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  const submitWorkType = () => {
    fetchData();
  };

  return (
    <Box width="400px" marginLeft="32px">
      <Text mb="8px" textAlign="start" fontSize="xs">
        Create Work Type
      </Text>
      <Input value={text} onChange={handleChange} />
      <Flex marginTop="18px" marginRight="30px" gap="18px" flexWrap="wrap">
        {COLORS.map((color) => (
          <Box
            key={color}
            width="40px"
            onClick={() => changeColor(color)}
            height="40px"
            borderRadius="50%"
            bgColor={color}
          />
        ))}
      </Flex>
      <AppButton onClick={submitWorkType} colorScheme="blue">
        Create
      </AppButton>
    </Box>
  );
};

export default WorkFlow;
