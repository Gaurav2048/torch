import { Box, Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react"
import { CiSearch } from "react-icons/ci";

type OwnProps = {
    query?: string;
    onChange?: (str: string) => void
}

const Search: React.FC<OwnProps> = ({ query, onChange }) => {
    return  <Stack>
        <InputGroup
                borderRadius="4px"
                size="md"
                width="300px" 
                bgColor="rgb(241, 241, 241)" 
                border="1px solid rgb(235, 235, 235)" 
                 >
            <InputLeftElement pointerEvents='none'>
                <CiSearch />
            </InputLeftElement>
            <Input value={query} type='text' placeholder='Search' focusBorderColor="transparent" />
        </InputGroup>
    </Stack>
    
}

export default Search;
