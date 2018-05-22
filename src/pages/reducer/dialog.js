const dialog = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_DIALOG':
            return true;
        case 'CLOSE_DIALOG':
            return false;
        default:
            return state  // 没有匹配的action type，返回原来的state
    }
}

export default dialog
