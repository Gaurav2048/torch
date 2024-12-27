import { Box } from "@chakra-ui/react";
import Progress from "../../components/Progress";
import Members from "../../components/Members";
import DashboardRoutes from "../../router/dashboardRouter";
import SecondaryNavigation from "../../components/SecondaryNavigation";

const Dashboard: React.FC = () => {
  return (
    <SecondaryNavigation>
      <Box
        width="100%"
        height="100%"
        overflow="hidden"
        flexGrow={1}
        display="flex"
        flexDirection="column"
      >
        <Box
          padding="12px 32px 0 32px"
          display="flex"
          justifyContent="space-between"
        >
          <Progress title="Piper Enterprise" />
          <Members />
        </Box>
        <Box width="100%" height="100%" overflow="hidden">
          <DashboardRoutes />
        </Box>
      </Box>
    </SecondaryNavigation>
  );
};

export default Dashboard;
