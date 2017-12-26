function resize(height, width) {
    return { type: 'RESIZE', payload: { height, width } };
}

function changeDuration(duration) {
    return { type: 'CHANGE_DURATION', payload: { duration } };
}

export { resize, changeDuration };
