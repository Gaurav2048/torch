import { Box } from "@chakra-ui/react";

type OwnProps = {
    children: any
}

const PrimaryNavigation: React.FC<OwnProps> = ({ children }) => {
    return <Box display="flex" width="100%" height="100%">
        <Box padding="16px 12px" width="72px" borderRight="1px solid rgba(235, 235, 235, 1)" height="100%">
            <NavigationIcon />
        </Box>
        {children}
    </Box>
}

export default PrimaryNavigation;

const NavigationIcon: React.FC = () => {
    return <Box width="48px" height="48px" borderRadius="12px" bgColor="#355EFF">
        
    </Box>
}