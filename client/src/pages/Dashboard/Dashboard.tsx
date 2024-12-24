import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";
import Progress from "../../components/Progress";
import Members from "../../components/Members";
import { useRecoilState } from "recoil";
import { boardAtom } from "../../AppState/state";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import DashboardRoutes from "../../router/dashboardRouter";
import SecondaryNavigation from "../../components/SecondaryNavigation";
import AppFilter from "../../components/AppFilter";

const TAB_SEGMENTS = {
  FUNNEL: "funnel",
  NOTES: "notes",
};

const Dashboard: React.FC = () => {
  const [board, setBoard] = useRecoilState(boardAtom);

  const [tabIndex, setTabIndex] = useState(0);
  const location = useLocation();
  const { orgId } = useParams();
  // const navigate = useNavigate()

  // const { response, fetchData } = useAxios({
  //     method: 'GET',
  //     url: `/boards/${orgId}`
  // })

  // useEffect(() => {
  //     fetchData()
  // }, [])

  // useEffect(() => {
  //     console.log('response', response)
  //     if(!response) return

  //     setBoard(response)
  // }, [response])

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  useEffect(() => {
    if (location.pathname.includes(TAB_SEGMENTS.FUNNEL)) {
      setTabIndex(0);
    }
    if (location.pathname.includes(TAB_SEGMENTS.NOTES)) {
      setTabIndex(1);
    }
  }, []);

  useEffect(() => {
    // if (tabIndex === 0) navigate('/')
  }, [tabIndex]);

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
        <Box padding="12px 32px" display="flex" justifyContent="space-between">
          <Progress title="Piper Enterprise" />
          <Members />
        </Box>
        <AppFilter />
        <Box
          width="100%"
          height="100%"
          overflow="hidden"
          bgColor="rgb(247, 247, 247)"
        >
          <DashboardRoutes />
        </Box>
      </Box>
    </SecondaryNavigation>
  );
};

export default Dashboard;
