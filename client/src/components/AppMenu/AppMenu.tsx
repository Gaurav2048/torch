import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";

type OwnProps = {
  anchor: () => React.ReactElement;
  children: (onClose?: () => void) => React.ReactElement;
  defaultOpen?: boolean;
};

const AppMenu: React.FC<OwnProps> = ({ anchor, children, defaultOpen }) => {
  const { isOpen, onClose: closeMenu, onOpen: openMenu } = useDisclosure();

  useEffect(() => {
    if (defaultOpen) openMenu();
  }, []);

  return (
    <Menu isOpen={isOpen} onOpen={openMenu} onClose={closeMenu}>
      <MenuButton as={Box} cursor="pointer">
        {anchor()}
      </MenuButton>
      <MenuList padding="4px 0" zIndex={1001}>
        {children(closeMenu)}
      </MenuList>
    </Menu>
  );
};

export default AppMenu;
