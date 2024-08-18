import { Formik } from "formik"
import AppDrawer from "../../../components/Drawer/Drawer"
import { array, boolean, object, string } from "yup";
import FormBody from "./FormBody";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import useNavDisclosure from "../../../hooks/useNavDisclosure";

const TaskForm: React.FC = () => {
    const { open, goBack } = useNavDisclosure('task')

    const task: Task = {
        sprintId: 'id',
        title: '',
        todos: [{
          _id: 'id-goes-here',
          text: 'dummy work',
          completed: false
        }],
        content: '',
        _id: '',
        workType: ''
    }

    const validationSchema = object({
        sprintId: string(),
        title: string().required('required!'),
        content: string().required('required!'),
        todos: array().of(object().shape({
            id: string().required('required!'),
            text: string().required('required!'),
            complete: boolean().default(false)
        }))
    })

    const onSubmit = (values: Task) => {
      alert(JSON.stringify(values))
    }

    return <Formik
            initialValues={task}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              onSubmit(values)
            }}
        >
            {({ submitForm, errors }) => (
              <form>
                <AppDrawer open={open} onClose={goBack} submitForm={submitForm}>
                  <>
                    <Button onClick={() => alert(JSON.stringify(errors))}>click!</Button>
                    <FormBody  />
                  </>
                </AppDrawer>
              </form>
            )}
        </Formik>

}

export default TaskForm;
