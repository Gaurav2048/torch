import { Formik } from "formik"
import AppDrawer from "../../../components/Drawer/Drawer"
import { array, boolean, object, string } from "yup";
import FormBody from "./FormBody";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const TaskForm: React.FC = () => {
    const location = useLocation()
    const handleClose = () => {}
    const [openDrawer, setOpenDrawer] = useState(false)
    useEffect(() => {
        if (location.pathname.includes('task')) {
          setOpenDrawer(true)
        }
    }, [location.pathname])

    const task: Task = {
        sprintId: '',
        title: '',
        todos: [],
        content: '',
        id: '',
        workType: ''
    }

    const validationSchema = object({
        sprintId: string().required('required!'),
        title: string().required('required!'),
        content: string().required('required!'),
        todos: array().of(object().shape({
            id: string().required('required!'),
            text: string().required('required!'),
            complete: boolean().default(false)
        }))
    })

    return <AppDrawer open={openDrawer} onClose={handleClose}>
        <Formik
            initialValues={task}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
        >
            {() => (
                 <form>
                    <FormBody />
                </form>
            )}
        </Formik>
    </AppDrawer>
}

export default TaskForm;
