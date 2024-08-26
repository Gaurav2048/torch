import { atom } from "recoil";
import { DEFAULT_BOARD, DEFAULT_COMMENT, DEFAULT_MEMBER, DEFAULT_ORG, STATE } from "../Constants";
import { CommentType, Member } from "..";

export const boardAtom = atom<BoardType>({
    key: STATE.BOARD,
    default: DEFAULT_BOARD // change to DEFAULT_BOARD later
})


export const orgAtom = atom<Organisation>({
    key: STATE.ORGANISATION,
    default: DEFAULT_ORG
})

export const memberAtom = atom<Array<Member>>({
    key: STATE.MEMBER,
    default: DEFAULT_MEMBER
})

export const commentsAtom = atom<Array<CommentType>> ({
    key: STATE.COMMENTS,
    default: DEFAULT_COMMENT
})

export const profileAtom = atom<Member>({
    key: STATE.PROFILE,
    default: {
        _id: "66badac8c97888943971763f",
        name: "Runjan Kalita",
        email: "runjankalita836@gmail.com",
        organisation: "66beb38e168efaf09cb836bd",
        role: "admin",
        password: ''
    }
})