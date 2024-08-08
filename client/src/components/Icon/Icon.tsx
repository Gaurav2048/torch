import { Box } from "@chakra-ui/react";
import { avaterText } from "../../utils/textUtils";

type OwnProps = {
    shape: 'square' | 'circle';
    border: '1' | '2' | '3';
    text: string;
    size: 'small' | 'medium';
    margin?: string
}

const Icon: React.FC<OwnProps> = ({
    shape,
    border,
    text,
    size,
    margin
}) => {
    return <Box
        width={size === 'small' ? '24px' : '36px'}
        height={size === 'small' ? '24px' : '36px'}
        borderRadius={shape === 'square' ? '20%' : '50%'}
        border={`${border}px solid #cbcbcb`}
        margin={margin || "0 8px 0 0 "}
        fontSize="12px"
        display="flex"
        color="#cccccc"
        alignItems="center"
        justifyContent="center"
        bgColor="white"
    >   
        {avaterText(text)}
    </Box>
}

export default Icon