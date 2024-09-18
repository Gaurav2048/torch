import { Formik } from "formik";
import AppDrawer from "../../../components/Drawer/Drawer";
import { array, boolean, object, string } from "yup";
import FormBody from "./FormBody";
import { Button } from "@chakra-ui/react";
import useNavDisclosure from "../../../hooks/useNavDisclosure";
import useAxios from "../../../hooks/useAxios";
import { ROUTES } from "../../../Constants";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { orgAtom } from "../../../AppState/state";
import { v4 } from "uuid";

export const DUMMY_SPRINT = "sprint_1";

const TaskForm: React.FC = () => {
  const { open, goBack } = useNavDisclosure("create/task");
  const org = useRecoilValue(orgAtom);
  const { boardId, columnId } = useParams();

  const { loading, response, fetchData } = useAxios({
    method: "post",
    url: ROUTES.ADD_TASK(org._id, boardId || ""),
  });

  const task: Task = {
    sprintId: DUMMY_SPRINT,
    title: "",
    todos: [],
    content: "",
    assignedTo: "",
    _id: "",
    workType: "",
    columnId,
  };

  const validationSchema = object({
    sprintId: string(),
    title: string().required("required!"),
    content: string().required("required!"),
    todos: array().of(
      object().shape({
        id: string().required("required!"),
        text: string().required("required!"),
        complete: boolean().default(false),
      }),
    ),
    assignedTo: string().required("Must assign to a member"),
    workType: string().required("Must add a work type"),
  });

  const onSubmit = async (values: Task) => {
    const { _id, ...rest } = values;
    await fetchData({
      ...rest,
      columnId,
      id: v4(),
    });
  };

  return (
    <Formik
      initialValues={task}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
      }}
    >
      {({ submitForm, errors, values }) => (
        <form>
          <AppDrawer open={open} onClose={goBack} submitForm={submitForm}>
            <>
              <Button onClick={() => alert(JSON.stringify(errors))}>
                click!
              </Button>
              <Button onClick={() => alert(JSON.stringify(values))}>
                click!
              </Button>
              <FormBody />
            </>
          </AppDrawer>
        </form>
      )}
    </Formik>
  );
};

export default TaskForm;
