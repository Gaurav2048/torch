import { selector } from "recoil";
import { memberAtom } from "./state";

// export const membersMap = selector<MemberMap>({
//     key: 'membersMapState',
//     get: ({ get }) => {
//         const members = get(memberAtom)
//         const obj: MemberMap  = {}
//         return members.reduce((prev, member) => {
//                 prev[member._id] = member
//         }, {})

//     }
// })
