const initialState = {}


export default  (state = initialState, action)=>{
    switch(action.type)
    {
        case 'ADD_PRODUCT':
            return {...state, [action.payload.id]:{...action.payload,quantity:1}}
        case 'REMOVE_PRODUCT':
            delete state[action.payload.id]
            return state;
        case 'INCREASE_QUANTITY':
            
            return {...state,[action.payload.id]:{...action.payload,quantity:action.payload.quantity+1}};
        case 'DESCREASE_QUANTITY':
            if(action.payload.quantity-1<0)
                return state;
            return {...state,[action.payload.id]:{...action.payload,quantity:action.payload.quantity-1}};
            return state;
        case 'ORDER_DONE':
            return initialState
        default :
            return state;
    }
}