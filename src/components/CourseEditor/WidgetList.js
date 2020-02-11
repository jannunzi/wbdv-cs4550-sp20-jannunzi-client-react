import React from "react";
import {connect} from "react-redux";
import {HeadingWidget} from "./widgets/HeadingWidget";
import {ParagraphWidget} from "./widgets/ParagrapthWidget";

class WidgetList extends React.Component {
    componentDidMount() {
        this.props.findAllWidgets()
    }

    render() {
        return(
            <ul>
                {
                    this.props.widgets.map(widget =>
                        <li key={widget.id}>
                            <h3>Common to all widgets</h3>
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    widget={widget}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    widget={widget}/>
                            }
                        </li>
                    )
                }
                <li>
                    <button onClick={this.props.createWidget}>
                        +
                    </button>
                </li>
            </ul>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets
})

const dispatcherToPropertyMapper = (dispatch) => ({
    createWidget: () =>
        fetch("http://localhost:8080/widgets", {
            method: "POST",
            body: JSON.stringify({
                id: (new Date()).getTime() + "",
                title: "New Widget"
            }),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
            .then(actualWidget => dispatch({
                type: "CREATE_WIDGET",
                widget: actualWidget
            })),
    findAllWidgets: () =>
        fetch("http://localhost:8080/widgets")
            .then(response => response.json())
            .then(actualWidgets => dispatch({
                type: "FIND_ALL_WIDGETS",
                widgets: actualWidgets
            }))
})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper)
(WidgetList)
