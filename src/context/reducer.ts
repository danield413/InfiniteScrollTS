
type Action = {
    type: string
    payload: any
}

type State = {
    gifs: Array<any>,
    offset: number,
    loading: boolean
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                gifs: state.gifs.concat(action.payload),
                loading: false
            }
        case 'LOAD': 
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}
export default reducer;