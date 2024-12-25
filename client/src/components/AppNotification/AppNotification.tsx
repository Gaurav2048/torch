import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { IoCloseOutline } from "react-icons/io5";
import AppButton from "../AppButton";
import CommentInput from "../CommentInput/CommentInput";
import { colorSchema } from "../../Constants";

type AppNotificationType = {
  onClose?: () => void;
};

const AppNotification: React.FC<AppNotificationType> = ({ onClose }) => {
  return (
    <Box width="400px" height="400px" overflow="hidden">
      <Flex
        borderBottom="1px solid rgb(232, 232, 232)"
        padding="4px 12px 10px 12px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="lg" fontWeight={500}>
          Notifications
        </Text>
        <IoCloseOutline fontSize="18px" cursor="pointer" onClick={onClose} />
      </Flex>
      <Box height="330px" flexGrow={1} overflow="scroll">
        <Notification />
        <Notification />
        <Notification />
      </Box>
      <AppButton
        size="sx"
        marginTop="4px"
        color={colorSchema.PRIMARY}
        variant="ghost"
      >
        Mark All As Read
      </AppButton>
    </Box>
  );
};

export default AppNotification;

const Notification: React.FC = () => {
  return (
    <Flex borderBottom="1px solid rgb(232, 232, 232)">
      <Box width="4px" minHeight="max-content" bgColor="greenyellow"></Box>
      <Flex position="relative" padding="12px" flexGrow={1}>
        <Box position="relative">
          <Avatar name="John Doe" size="md" />
          <Box
            position="absolute"
            zIndex={200}
            border="4px solid white"
            borderRadius="50%"
            top="30px"
            right="-2px"
            bgColor="green"
            width="24px"
            height="24px"
          />
        </Box>
        <Box marginLeft="12px">
          <Text fontSize="md" textAlign="left" marginTop="4px">
            <span style={{ fontWeight: 600 }}>Hailey Garza </span>
            added a new comment.
          </Text>
          <Text textAlign="left" fontSize="xs" fontWeight={200}>
            1 min ago
          </Text>
          <Box
            marginTop="12px"
            color="darkblue"
            borderLeft="4px solid rgb(232, 232, 232)"
            padding="12px"
            textAlign="left"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore.
          </Box>
          <AppButton size="sm" marginLeft="14px" float="left">
            View
          </AppButton>
        </Box>
      </Flex>
    </Flex>
  );
};

// /**
//  *
//  *
//  * /
