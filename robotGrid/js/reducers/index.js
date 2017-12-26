const reducers = (state, action) => {
    switch (action.type) {
        case 'CHANGE_DURATION':
            return Object.assign({}, state, { duration: action.payload.duration });

        case 'RESIZE':
            return Object.assign({}, state, {
                height: action.payload.height,
                width: action.payload.width,
            });

        default:
            return state;
    }
};

export default reducers;
