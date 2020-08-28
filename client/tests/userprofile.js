
const getArrayIndex = (array) => {
    return array.length - 1
}

const getUserIdFromWindowLocation = (url) => {
    const userLocationDataArray = url.split("/")
    const arrayIndex = getArrayIndex(userLocationDataArray);
    const userId = userLocationDataArray[arrayIndex]

    return userId
}



module.exports = getUserIdFromWindowLocation