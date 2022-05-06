export default (state, action) => {
    switch (action.type) {
        case 'GET_ATTRACTIONS':
            return {
                ...state,
                loading: false,
                attractions: action.payload
            }
       /* case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !==
                    action.payload)
            }
        */
        case 'ADD_ATTRACTION':
            return {
                ...state,
                attractions: [...state.attractions, action.payload]

            }
        case 'ATTRACTION_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}