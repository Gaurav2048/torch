import { Button, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react"
import { getIn, useFormikContext } from "formik";

const MemberForm: React.FC = () => {
    const { values, errors, handleChange, touched, submitCount } = useFormikContext<Member>()
    const getInFn = (name: string) => {
        if (submitCount === 0) return
        if (getIn(touched, name) && getIn(errors, name)) {
            return getIn(errors, name)
        }
    }

    return <form>
        <Button onClick={() => alert(JSON.stringify(errors))}>f</Button>
        <FormControl mt={4}>
            <FormLabel>Name</FormLabel>
            <Input onChange={handleChange} value={values.name} name="name" />
            <FormHelperText color="red">{getInFn("name")}</FormHelperText>
        </FormControl>
        <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input onChange={handleChange} value={values.email} name="email" />
            <FormHelperText color="red">{getInFn("email")}</FormHelperText>
        </FormControl>
        <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input onChange={handleChange} value={values.password} name="password" />
            <FormHelperText color="red">{getInFn("password")}</FormHelperText>
        </FormControl>
    </form>
}

export default MemberForm;
