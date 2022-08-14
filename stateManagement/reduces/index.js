import { reports } from "../../components/shared/constants";
import { lists } from "../../components/shared/constants";

const initialState = {
    reports: reports,
    reply: [],
    reportByID: [],
    carts: [],
    listData: lists,
    listSearch: [],
    form: []
}

const rootReducer = (state= initialState, action) =>{
    switch (action.type){
        case 'ADD_REPORT': 
        state.reports.unshift(action.payload);
        break;
        case 'GET_REPORT':

        // console.log(action.payload)
        
            const reportByID = state.reports.filter(item => action.payload === item.item)
            console.log(reportByID)
            
            state.reportByID = [...reportByID]
            break;
        // case 'GET_NAME':
        //     const name = state.reports.filter(item => action.payload === item.item)
        //     console.log(name)
            
        //     state.name = [...name]
        //         break;
        case 'ADD_REPLY':

            // console.log(action.payload)
            
            state.reply.unshift(action.payload);
                
                break;
        case 'ADD_TO_CART':
            state.carts = [...state.carts, action.payload]

            // state.carts.unshift(action.payload)
            
            break;
        case 'UPDATE_ITEM_COUNT':
            let updateState;
            console.log(action.payload.count)
            if(Number(action.payload.count) === 0){
                updateState = state.carts.filter(item => item.id !== action.payload.id)
            }
            else{
                updateState = state.carts.map(item => {
                if( item.id === action.payload.id){
                    return action.payload
                }
                else{
                    return item
                }

            })
            }
             

            state.carts = [...updateState]
            
            break;
        case 'UPDATE_LIKE_REPORT':
            let updateListReport = state.reportByID.map(item => item.id === action.payload ? {...item, like: !item.like } : item)
            state.reportByID = [...updateListReport]
            break;
        case 'UPDATE_REPLY_REPORT':
            let updateRepListReport = state.reportByID.map(item => item.id === action.payload ? {...item, reply: !item.reply } : item)
            state.reportByID = [...updateRepListReport]
            break;
        case 'FIND_ITEM': 
            const findData = state.listData.filter( item => item.name.toLowerCase().includes(action.payload))
            state.listSearch = [...findData]
            break;
        case 'FIND_ITEM_BY_PRICE':
            const price = Number(action.payload)
            const findDataWithPrice = state.listData.filter( item =>{
                if(price === 1000000){
                    return item.price > 0 && item.price <= price
                }
                else if(price === 2000000){
                    return item.price > 1000000 && item.price <= price
                }
            }
            )
            console.log(findDataWithPrice)
            state.listSearch = [...findDataWithPrice]
            break;
        default:
            break;
    }
    console.log(state)
    return {...state}
}
export default rootReducer