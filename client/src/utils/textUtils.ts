export const avaterText = (str: string) => {
    const strSplit = str.split(" ")
    return `${strSplit?.[0][0]}${strSplit?.[1][0]}`
}