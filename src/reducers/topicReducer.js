const initialState = {
    topics: [
        {id: 123, title: "Topic A"},
        {id: 234, title: "Topic B"},
        {id: 345, title: "Topic C"},
    ]
}
const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TOPICS":
            return {
                topics: action.topics
            }
        default:
            return state
    }
}

export default topicReducer
