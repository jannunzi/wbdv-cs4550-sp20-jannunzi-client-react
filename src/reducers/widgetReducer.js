const widgets = [
    {id: "123", title: "W123"},
    {id: "234", title: "W234"},
    {id: "345", title: "W345"},
    {id: "456", title: "W456"}
]

const widgetReducer = (
    state = {widgets: widgets}, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "FIND_ALL_WIDGETS":
            return {
                widgets: action.widgets
            }
        default:
            return state
    }
}

export default widgetReducer
