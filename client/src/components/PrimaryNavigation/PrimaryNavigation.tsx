import { Box, Flex } from "@chakra-ui/react";
import { MdDashboard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import Icon from "../Icon";
import { colorSchema } from "../../Constants";
import { useNavigate } from "react-router-dom";

type OwnProps = {
  children: React.ReactElement
};

const PrimaryNavigation: React.FC<OwnProps> = ({ children }) => {
  const navigate = useNavigate()
  return (
    <Box display="flex" width="100%" height="100%">
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        padding="16px 12px"
        width="72px"
        borderRight="1px solid rgba(235, 235, 235, 1)"
        height="100%"
      >
        <Box>
          <NavigationIcon />
          <Box onClick={() => navigate('/dashboard')}> 
            <Icon
              shape="square"
              margin="24px 0"
              icon={() => <MdDashboard size="20px" />}
              size="large"
              border="1"
            />
          </Box>
          <Box onClick={() => navigate('/settings')}>
            <Icon
              shape="square"
              icon={() => <IoSettingsOutline size="20px" />}
              size="large"
              border="1"
            />
          </Box>
          <Icon
            shape="square"
            margin="24px 0"
            icon={() => <FaUsers size="20px" />}
            size="large"
            border="1"
          />
        </Box>
        <Icon
          shape="square"
          icon={() => <IoMdLogOut size="20px" />}
          size="large"
          border="1"
        />
      </Flex>
      {children}
    </Box>
  );
};

export default PrimaryNavigation;

const NavigationIcon: React.FC = () => {
  return (
    <Box
      width="44px"
      height="44px"
      borderRadius="12px"
      bgColor={colorSchema.PRIMARY}
    ></Box>
  );
};
