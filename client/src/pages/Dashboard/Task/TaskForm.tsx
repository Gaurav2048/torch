import { Formik } from "formik";
import AppDrawer from "../../../components/Drawer/Drawer";
import { array, boolean, object, string } from "yup";
import FormBody from "./FormBody";
import { Button } from "@chakra-ui/react";
import useNavDisclosure from "../../../hooks/useNavDisclosure";
import useAxios from "../../../hooks/useAxios";
import { ROUTES } from "../../../Constants";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { boardAtom, orgAtom } from "../../../AppState/state";
import { v4 } from "uuid";
import { Task } from "../../..";
import { useEffect } from "react";
import { produce } from "immer";

export const DUMMY_SPRINT = "sprint_1";

const TaskForm: React.FC = () => {
  const { open, goBack } = useNavDisclosure("create/task");
  const org = useRecoilValue(orgAtom);
  const { boardId, columnId } = useParams<{ boardId: string, columnId: string }>();
  const [ board, setBoard ] = useRecoilState(boardAtom)

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
    id: "",
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

  useEffect(() => {
    // fetch Tasks 
    setBoard(produce(board, draft => {
      if (!columnId) return draft
      draft.tasks[response.id] = response
      draft.columns[columnId].taskIds.unshift(response.id)
      return draft
    }))
    goBack()
  }, [response])

  const onSubmitData = async (values: Task) => {
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
        onSubmitData(values);
      }}
    >
      {({ submitForm, errors, values }) => (
        <form>
          <AppDrawer
            title="Create Task"
            open={open}
            onClose={goBack}
            loading={loading}
            actionTitle="Create Task"
            submitForm={submitForm}
          >
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
