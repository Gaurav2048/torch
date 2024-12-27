import { Box, Flex, Select } from "@chakra-ui/react";
import AppTypography from "../AppTypography/AppTypography";
import {
  IconAppAdjustment,
  IconAppBoard,
  IconAppColumn,
  IconAppList,
} from "../../Constants/Icons";
import AppMenu from "../AppMenu";
import AppButton from "../AppButton";
import {
  COLUMN_OPTIONS,
  DISPLAY_OPTIONS,
  ORDER_OPTIONS,
} from "../../Constants";
import { useRecoilState } from "recoil";
import { displayPriority } from "../../AppState/state";
import { produce } from "immer";

const DisplayPriorities: React.FC = () => {
  const [displayOptions, setDisplayOptions] = useRecoilState(displayPriority);

  const toggleDisplayPriorities = (option: string) => {
    setDisplayOptions(
      produce(displayOptions, (draft) => {
        if (!!draft.displayItems.includes(option)) {
          draft.displayItems = draft.displayItems.filter(
            (item) => item !== option,
          );
        } else {
          draft.displayItems.push(option);
        }
      }),
    );
  };

  return (
    <AppMenu
      anchor={() => (
        <AppButton mr="64px" size="sm" leftIcon={<IconAppAdjustment />}>
          Display
        </AppButton>
      )}
    >
      {() => (
        <Box width="380px" padding="16px">
          <Flex gap="16px" marginBottom="24px">
            <Box
              flexGrow={1}
              borderRadius="6px"
              border="1px solid lightgray"
              padding="8px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <AppTypography text="Board" variant="caption1" />
              <IconAppBoard />
            </Box>
            <Box
              bgColor="primary.100"
              flexGrow={1}
              borderRadius="6px"
              border="1px solid lightgray"
              padding="8px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <AppTypography
                color="primary.900"
                text="List"
                variant="caption1"
              />
              <IconAppList color="primary.900" />
            </Box>
          </Flex>
          <Flex
            marginTop="12px"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex gap="12px" alignItems="center" justifyContent="start">
              <IconAppColumn />
              <AppTypography text="Column" variant="caption1" />
            </Flex>
            <Select disabled width="158px" size="xs" title="WIP">
              {COLUMN_OPTIONS.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Flex>

          <Flex
            marginTop="12px"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex gap="12px" alignItems="center" justifyContent="start">
              <IconAppColumn />
              <AppTypography text="Order By" variant="caption1" />
            </Flex>
            <Select disabled width="158px" title="WIP" size="xs">
              {ORDER_OPTIONS.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Flex>
          <Box marginTop="12px">
            <AppTypography text="Display Priorities" variant="caption2" />
            <Flex marginTop="8px" flexWrap="wrap" marginRight="24px" gap="8px">
              {Object.keys(DISPLAY_OPTIONS).map((option) => (
                <AppTypography
                  onClick={() => toggleDisplayPriorities(option)}
                  cursor="pointer"
                  key={option}
                  border="1px solid lightgray"
                  fontSize="12px"
                  borderRadius="2px"
                  padding="2px 4px"
                  text={option}
                  variant="body1"
                  bgColor={
                    displayOptions.displayItems.includes(option)
                      ? "primary.100"
                      : "inherit"
                  }
                  color={
                    displayOptions.displayItems.includes(option)
                      ? "primary.900"
                      : "inherit"
                  }
                />
              ))}
            </Flex>
          </Box>
        </Box>
      )}
    </AppMenu>
  );
};

export default DisplayPriorities;
