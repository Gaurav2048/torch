import { Box } from "@chakra-ui/react";

type OwnProps = {
    children: React.ReactElement
}

const Header: React.FC<OwnProps> = ({
    children
}) => {
    return <Box padding="24px 32px" 
                borderBottom="1px solid rgba(235, 235, 235, 1)"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                >
                  {children}
            </Box>
}

export default Header;
