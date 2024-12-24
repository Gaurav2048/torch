import { Checkbox } from "@chakra-ui/react"

type OwnProps = {
   checked: boolean
}

const AppInput: React.FC<OwnProps> = ({
    checked
}) => {
    return <Checkbox
                marginRight="8px"
                size="md"
                sx={{
                _focus: {
                    outline: "none",
                    boxShadow: "none",
                },
                }}
                isChecked={checked}
            /> 
}

export default AppInput;
