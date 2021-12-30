const initialState = {}


export default  (state = initialState, action)=>{
    let updatedState;
    switch(action.type)
    {
        case 'LOAD_PRODUCTS':
            return action.payload
        case 'ADD_PRODUCT':
            updatedState = {...state, [action.payload.id]:{...action.payload,quantity:1}};
            localStorage['item'] = JSON.stringify(updatedState)
            return updatedState 
        case 'REMOVE_PRODUCT':
            delete state[action.payload.id]
            localStorage['item'] = JSON.stringify(state)
            return {...state};
        case 'INCREASE_QUANTITY':
            updatedState = {...state,[action.payload.id]:{...action.payload,quantity:action.payload.quantity+1}};
            localStorage.setItem('item',JSON.stringify(updatedState))
            
            return updatedState;
        case 'DESCREASE_QUANTITY':
            if(action.payload.quantity<1)
                return state;
            updatedState = {...state,[action.payload.id]:{...action.payload,quantity:action.payload.quantity-1}}
            localStorage.setItem('item',JSON.stringify(updatedState))
            return updatedState;
            
        case 'ORDER_DONE':
            localStorage.removeItem('item')
            return initialState
        default :
            return state;
    }
}