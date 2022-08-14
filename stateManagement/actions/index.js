export const addReport = (data) =>{
    return { type: 'ADD_REPORT', payload: data}
}
export const getReport = (id) => {
    return {type: 'GET_REPORT', payload: id}
}
export const addReply = (data) => {
    return {type: 'ADD_REPLY', payload: data}
}
export const addToCart = (item) => {
    return {type: 'ADD_TO_CART', payload: item}
}
export const updateItem = (item) => {
    return {type: 'UPDATE_ITEM_COUNT', payload: item}
}
export const updateLikeReport = (id) => {
    return {type: 'UPDATE_LIKE_REPORT', payload: id}
}
export const updateReplyReport = (id) => {
    return {type: 'UPDATE_REPLY_REPORT', payload: id}
}
export const findItem = (keyWord) => {
    return {type: 'FIND_ITEM', payload: keyWord}
}
export const findItemByPrice = (price) => {
    return {type: 'FIND_ITEM_BY_PRICE', payload: price}
}