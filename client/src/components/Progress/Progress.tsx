import { Box, Text, Progress as Bar } from "@chakra-ui/react"
import Icon from "../Icon";
import { colorSchema } from "../../Constants";

type OwnProps = {
    title: string
}

const Progress: React.FC<OwnProps> = ({ title }) => {
    return <Box display="flex">
        <Icon shape="square" size="large" text={title} border="1"  />
        <Box marginLeft="8px">
            <Text fontWeight="600" fontSize="lg" textAlign="start" >{title}</Text>
            <Box alignItems="center" marginTop="4px" display="flex">
                <Bar value={65}  size="xs" width="300px" colorScheme={colorSchema.PRIMARY}  />
                <Text marginLeft="16px" fontSize="x-small" color="gray">65% Completed</Text>
            </Box>
        </Box>
    </Box>
}

export default Progress;
