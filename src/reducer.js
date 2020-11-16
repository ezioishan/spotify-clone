export const initialState = {
    user: "",
    playlists: null,
    playing: false,
    item: null,
    //a quick shortcut-set to null after developing
    token: "BQDxVwsT0kAF0ehQZNY7Xe4B6SxGpGlQ9Om7wthTfAL8j6rukL6NRTXdz3w4tB9_mw3EU9yedlgTeM0VYu8mxFX_iXX6NriMKp2qBHkh8j9q6CklU1DKV8nO1DhTDIW_kGDZCJRWvpUY8koAnZBAaNi3DKjqSV3TAIUUMNU1Ry4",
};

//state-how the data looks atm
const reducer = (state, action) => {
    //console.log(action);

    /*When we push user into data layer - we dispatch action, which has 2 things
    1st->type eg: SET_USER--->we dispatch this action 2nd->[payload]*/

    //Action -> type, [payload]
    //reducer listens to action and sits idle for it

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        default:
            return state;
    }
}
export default reducer;