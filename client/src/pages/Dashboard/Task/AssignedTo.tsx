import { Select } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { boardAtom, memberAtom } from "../../../AppState/state";
import { useMemo } from "react";
import { useFormikContext } from "formik";

const AssignedTo: React.FC = () => {
    const board = useRecoilValue(boardAtom)
    const { members: boardMembers } = board
    const members = useRecoilValue(memberAtom)
    const { values, handleChange } = useFormikContext<BoardType>()
    const memberMap = useMemo<MemberMap>(() => {
        return members.reduce((acc: MemberMap, member) => {
            const key = member._id
            acc[key] = member
            return acc
        }, {})
    }, [members])

    return <>
        <Select placeholder="Select Assignee" value={values.assignedTo} name="assignedTo" onChange={handleChange}>
            {boardMembers?.map(id => <option key={id} value={id}>
                {memberMap[id]?.name}
            </option>)}
    </Select>
    </>
}

export default AssignedTo;
