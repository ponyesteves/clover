export const humanize = (str) => str.split("_").map(capitalizeFirstLetter).join(" ")

const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1)

export const sum = (...args) => args.reduce((p,c) => p + c, 0)


const any = options => Object.keys(options).length > 0
const empty = options => !any(options)
