import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

type OwnProps = {
  anchor: () => React.ReactElement;
  children: React.ReactElement;
};

const AppMenu: React.FC<OwnProps> = ({ anchor, children }) => {
  return (
    <Menu>
      <MenuButton as={Box} cursor="pointer">
        {anchor()}
      </MenuButton>
      <MenuList zIndex={1001}>{children}</MenuList>
    </Menu>
  );
};

export default AppMenu;
