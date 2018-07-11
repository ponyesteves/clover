export const humanize = (str) => str.split("_").map(capitalizeFirstLetter).join(" ")

const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1)
