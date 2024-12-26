import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import Todos from "./Todos";
import { getIn, useFormikContext } from "formik";
import { useRecoilValue } from "recoil";
import { orgAtom } from "../../../AppState/state";
import AssignedTo from "./AssignedTo";
import { Task } from "../../..";

const FormBody: React.FC = () => {
  const { errors, handleChange, values } = useFormikContext<Task>();
  const org = useRecoilValue(orgAtom);

  return (
    <>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          value={values.title}
          name="title"
          onChange={handleChange}
          type="text"
          placeholder="Task title"
        />
        <FormHelperText>{getIn(errors, "title")}</FormHelperText>
      </FormControl>
      <FormControl mt={2}>
        <FormLabel>Description</FormLabel>
        <Textarea
          value={values.content}
          name="content"
          onChange={handleChange}
          placeholder="Describe the task here"
        />
        <FormHelperText>{getIn(errors, "content")}</FormHelperText>
      </FormControl>

      <FormControl mt={2}>
        <FormLabel>Work Type</FormLabel>
        <Select
          name="workType"
          value={values.workType}
          placeholder="Select Work Type"
          onChange={handleChange}
        >
          {org.workTypes.map((type) => (
            <option value={type._id} key={type._id}>
              {type.name}
            </option>
          ))}
        </Select>
        <FormHelperText>{getIn(errors, "content")}</FormHelperText>
      </FormControl>

      <FormControl mt={2}>
        <FormLabel>Sprint</FormLabel>
        <Select>
          {org.workTypes.map((type) => (
            <option value={type._id} key={type._id}>
              {type.name}
            </option>
          ))}
        </Select>
        <FormHelperText>{getIn(errors, "content")}</FormHelperText>
      </FormControl>

      <FormControl mt={2}>
        <FormLabel>Assign To</FormLabel>
        <AssignedTo />
        <FormHelperText>{getIn(errors, "assignedTo")}</FormHelperText>
      </FormControl>

      <FormControl mt={2}>
        <Todos />
      </FormControl>
    </>
  );
};

export default FormBody;
