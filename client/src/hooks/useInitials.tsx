import { useEffect } from "react"
import useAxios from "./useAxios"
import { useRecoilState } from "recoil"
import { orgAtom } from "../AppState/state"

const useInitials = () => {
    const orgId = '66beb38e168efaf09cb836bd' // Need to change to local storage later
    const [ org, setOrg ] = useRecoilState(orgAtom)
    const { loading, fetchData, response } = useAxios({
        method: "GET",
        url: `/org/${orgId}`,
    })

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (!!response) {
            setOrg(response)
        }
    }, [response])

    return loading

}

export default useInitials;
