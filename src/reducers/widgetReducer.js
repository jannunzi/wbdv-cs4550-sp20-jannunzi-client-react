const widgets = [
    {id: "123", title: "W123"},
    {id: "234", title: "W234"},
    {id: "345", title: "W345"},
    {id: "456", title: "W456"}
]

const widgetReducer = (
    state = {widgets: widgets}, action) => {
    switch (action.type) {
        case "UPDATE_WIDGET":
            return {
                widgets: state.widgets.map(widget => widget.id === action.widget.id ? action.widget : widget)
            }
        case "DELETE_WIDGET":
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case "CREATE_WIDGET":
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                widgets: action.widgets
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
