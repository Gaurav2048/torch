import { useEffect, useMemo, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const useNavDisclosure = (segment: string) => {
    const location = useLocation()
    const navigate = useNavigate()

    const open = useMemo(() => {
        return location.pathname.includes(segment)
    }, [location.pathname])

    const goBack = () => navigate(-1)

    return { open, goBack }
}

export default useNavDisclosure;
