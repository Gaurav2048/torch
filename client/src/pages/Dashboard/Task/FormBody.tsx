import { Button, FormControl, FormHelperText, FormLabel, Input, Textarea } from "@chakra-ui/react";
import Todos from "./Todos";
import { getIn, useFormikContext } from "formik";

const FormBody: React.FC = () => {
    const { errors, handleChange } = useFormikContext()

    return <>
        <FormControl>
            <FormLabel>Title</FormLabel>
            <Input name="title" onChange={handleChange} type="text" placeholder="Task title" />
            <FormHelperText>{getIn(errors, 'title')}</FormHelperText>
        </FormControl>
        <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea name="content" onChange={handleChange} placeholder="Describe the task here" />
            <FormHelperText>{getIn(errors, 'content')}</FormHelperText>
        </FormControl>
        <FormControl mt={4} >
            <Todos />
        </FormControl>
    </>
}

export default FormBody;
