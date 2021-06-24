
type Action = {
    type: string
    payload: any
}

type State = {
    gifs: Array<any>,
    offset: number,
    query: string,
    loading: boolean
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                gifs: state.gifs.concat(action.payload.data),
                loading: false,
                query: action.payload.query
            }
        case 'LOAD': 
            return {
                ...state,
                loading: true
            }
        case 'CHANGE-OFFSET': 
            return {
                ...state,
                offset: state.offset + 10
            }
        case 'RESET-QUERY':
            return {
                ...state,
                gifs: []
            }
        default:
            return state;
    }
}
export default reducer;