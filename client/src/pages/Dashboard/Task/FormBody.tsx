import { Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

const FormBody: React.FC = () => {
    return <>
        <FormControl>
            <FormLabel>Title</FormLabel>
            <Input name="title" type="text" placeholder="Task title" />
        </FormControl>
        <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea name="content" placeholder="Describe the task here" />
        </FormControl>
    </>
}

export default FormBody;
