import { ActionTypes } from '../actionTypes';

export const updateUserAction = (item) => {
    console.log("🚀 ~ file: user.js:4 ~ updateUserAction ~ item:", item)
    return {
        type: ActionTypes.UPDATE_USER_INFO,
        payload: item,
    };
};