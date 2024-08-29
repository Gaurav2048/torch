import { Reaction, REACTION_TYPE } from "..";

type ReactionMap = { 
    [key in REACTION_TYPE]: Array<Reaction> 
}

export const createReationMap = (reactions?: Array<Reaction>): ReactionMap => {
    if (!reactions) return {};
    return reactions.reduce((previous, current) => {
        if (!previous[current.reaction] ) {
            const arr = []
            arr.push(current)
            previous[current.reaction] = arr
        } else {
            previous[current.reaction].push(current)
        }
        return previous
    }, {} as ReactionMap)
}