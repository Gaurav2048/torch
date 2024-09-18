import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";

type OwnProps = {
  anchor: () => React.ReactElement;
  children: (onClose?: () => void) => React.ReactElement;
};

const AppMenu: React.FC<OwnProps> = ({ anchor, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <Menu isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      <MenuButton as={Box} cursor="pointer">
        {anchor()}
      </MenuButton>
      <MenuList zIndex={1001}>{children(onClose)}</MenuList>
    </Menu>
  );
};

export default AppMenu;
