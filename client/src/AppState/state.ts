import { atom, useRecoilState } from "recoil";
import { DEFAULT_BOARD, STATE } from "../Constants";
import { board } from "../components/Funnel/data";

export const boardAtom = atom<BoardType>({
    key: STATE.BOARD,
    default: board // change to DEFAULT_BOARD later
})
