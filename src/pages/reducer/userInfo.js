const user = {
    username: '',
    login: false
}
const userInfo = (state = user, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                username: action.name,
                login: true
            };
        case 'SIGN_OUT':
            return {
                username: '',
                login: false
            };

        default:
            return state
    }
}

export default userInfo;
