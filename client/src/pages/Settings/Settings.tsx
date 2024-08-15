import { Box } from "@chakra-ui/react"
import Org from "./Org"
import Sprint from "./Sprint";
import WorkFlow from "./WorkFlow";
import SecondaryNavigation from "../../components/SecondaryNavigation";

const Settings: React.FC = () => {
    return <SecondaryNavigation>
        <Box>
            <Org />
            <Sprint />
            <WorkFlow />
        </Box>
    </SecondaryNavigation>
}

export default Settings;
