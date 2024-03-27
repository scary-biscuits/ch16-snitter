export const dateToString = (unixDate) => {
    return unixDate.toUTCstring();
}

export const isMySneet = (sneetUserId, userId) => {
    if (sneetUserId === userId) {
        return true
    }
}