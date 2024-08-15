import { Formik } from "formik"
import AppDrawer from "../../../components/Drawer/Drawer"
import { array, boolean, object, string } from "yup";
import FormBody from "./FormBody";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";

const TaskForm: React.FC = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const handleClose = () => {
      navigate(-1)
    }
    const [openDrawer, setOpenDrawer] = useState(false)
    useEffect(() => {
        if (location.pathname.includes('task')) {
          setOpenDrawer(true)
        }else {
          setOpenDrawer(false)
        }
    }, [location.pathname])

    const task: Task = {
        sprintId: 'id',
        title: '',
        todos: [{
          id: 'id-goes-here',
          text: 'dummy work',
          completed: false
        }],
        content: '',
        id: '',
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
              // setTimeout(() => {
              //   alert(JSON.stringify(values, null, 2));
              //   setSubmitting(false);
              // }, 400);
            }}
        >
            {({ submitForm, errors }) => (
              <form>
                <AppDrawer open={openDrawer} onClose={handleClose} submitForm={submitForm}>
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
