const initialState = {
    duration: 500, // duration of each state

    // grid heights and widths
    height: 5,
    width: 8,

    // initial state of warehouse (empty)
    warehouse: Array(5)
        .fill(0)
        .map(_ => Array(8).fill('0')),
};

export default initialState;
