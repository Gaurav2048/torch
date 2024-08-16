import { useEffect, useMemo, useState } from "react";
import AppDrawer from "../../../components/Drawer/Drawer";
import MemberForm from "./MemberForm";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useRecoilState, useRecoilValue } from "recoil";
import { memberAtom, orgAtom } from "../../../AppState/state";
import { object, string } from "yup";
import useAxios from "../../../hooks/useAxios";
import { ROUTES } from "../../../Constants";

const CreateMember: React.FC = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const org = useRecoilValue(orgAtom)
    const [ members, setMembers ] = useRecoilState(memberAtom)

    const { response, fetchData } = useAxios({
        method: 'POST',
        url: ROUTES.CREATE_MEMBER(org._id),
    })

    const show = useMemo<boolean>(() => {
        return location.pathname.includes('create')
    }, [location.pathname])

    const handleClose = () => {
        navigate(-1)
    }

    const initialvalue: Member = {
        name: '',
        email: '',
        organisation: '',
        password: '',
        role: '',
    }

    useEffect(() => {
        if (!response) return
        setMembers([response, ...members])
    }, [response])

    const validationSchema = object({
        name: string().required('Name is required'),
        email: string().email().required('Email is required'),
        password: string().min(6).required('Password is required'),
    })

    const handleSubmit = async (data: Member) => {
        const member = {
            ...data,
            organisation: org._id,
            role: 'user'
        }

        await fetchData(member)
        handleClose()
    }


    return <Formik 
                initialValues={initialvalue}
                validationSchema={validationSchema}
                onSubmit={(value) => handleSubmit(value)}
           >
            {({ submitForm }) => <AppDrawer submitForm={submitForm} open={show} onClose={handleClose}>
            <MemberForm />
        </AppDrawer>}
    </Formik>
}

export default CreateMember;
