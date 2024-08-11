import { atom, useRecoilState } from "recoil";
import { DEFAULT_BOARD, STATE } from "../Constants";

export const boardAtom = atom<BoardType>({
    key: STATE.BOARD,
    default: DEFAULT_BOARD
})

const [ board, setBoard ] = useRecoilState(boardAtom)


export default {
    board, setBoard
}