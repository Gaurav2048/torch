import { atom, useRecoilState } from "recoil";
import { DEFAULT_BOARD, DEFAULT_ORG, STATE } from "../Constants";
import { board } from "../components/Funnel/data";

export const boardAtom = atom<BoardType>({
    key: STATE.BOARD,
    default: DEFAULT_BOARD // change to DEFAULT_BOARD later
})


export const orgAtom = atom<Organisation>({
    key: STATE.ORGANISATION,
    default: DEFAULT_ORG
})