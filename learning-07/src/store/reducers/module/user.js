import * as types from '../../constants/types';


const initUserState = {

    userInfo: {
        hasLogined: false,
        username: '',
        avatar: '',
        id: '',
        token: ''
    }

}

export function user(state = initUserState.userInfo,action){

    switch(action.type) {
        case types.LOGOIN_SUCCESS:
            console.log("user......"+ action.payload);
            return {
                ...state,
                ...action.payload
            }
        case types.LOGOUT:
            return {
                userInfo:'一经推出'
            };

        default:
            return state;
    }

}


