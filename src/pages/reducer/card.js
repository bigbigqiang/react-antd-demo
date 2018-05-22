const initCard = {
    name: 'Jack',
    picture: 'a.jpg'
}
const card = (state = initCard, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                name: action.name, // 使用action携带的新name
                picture: state.picture  // 不需要修改，使用旧state的值
            };

        default:
            return state  // 没有匹配的action type，返回原来的state
    }
}

export default card
