import { Avatar, Box, Text } from "@chakra-ui/react"
import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import AppMenu from "../AppMenu";
import AppNotification from "../AppNotification";

export const HEADER_ICON_COLOR = "rgb(172, 181, 198)"
export const HEADER_ICON_SIZE = "24px"

const Others: React.FC = () => {
    return <Box display="flex" gap="18px">
        <IoSettingsOutline color={HEADER_ICON_COLOR} size={HEADER_ICON_SIZE} />
        <AppMenu anchor={() => <IoNotificationsOutline color={HEADER_ICON_COLOR} size={HEADER_ICON_SIZE} />}> 
            <AppNotification />
        </AppMenu>
        <Avatar size="xs" src="https://ntrepidcorp.com/wp-content/uploads/2016/06/team-1.jpg" />
        <Text fontSize={"xs"} color="rgb(16, 36, 59)">Alison Hoper</Text>
    </Box>
}

export default Others;
