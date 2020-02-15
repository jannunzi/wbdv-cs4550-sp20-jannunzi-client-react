import React from "react";
import {connect} from "react-redux";
import HeadingWidget from "./widgets/HeadingWidget";
import {ParagraphWidget} from "./widgets/ParagrapthWidget";

class WidgetList extends React.Component {
    componentDidMount() {
        // this.props.findAllWidgets()
        this.props.findWidgetsForTopic(this.props.topicId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.topicId !== this.props.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId)
        }
    }

    state = {
        widget: {
            title: ''
        }
    }

    save = (widget) =>
    {
        this.setState(prevState => {
            return {
                widget: widget
            }
        })
        this.props.updateWidget(widget.id, widget)
    }

    render() {
        return(
            <ul>
                <li>
                    {this.state.widget.title}
                </li>
                {
                    this.props.widgets && this.props.widgets.map(widget =>
                        <li key={widget.id}>
                            <button onClick={() =>
                                this.props.deleteWidget(widget.id)}>
                                X
                            </button>
                            <button onClick={() =>
                                this.setState({
                                    widget: widget
                                })}>
                                ...
                            </button>
                            <h3>Common to all widgets</h3>
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    save={this.save}
                                    editing={widget.id === this.state.widget.id}
                                    widget={widget}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    save={this.save}
                                    editing={widget.id === this.state.widget.id}
                                    widget={widget}/>
                            }
                        </li>
                    )
                }
                <li>
                    <button
                        onClick={() =>
                            this.props.createWidget({
                                id: (new Date()).getTime() + "",
                                topicId: this.props.topicId,
                                title: "New Widget"
                            })}>
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
    updateWidget: (wid, widget) =>
        fetch(`http://localhost:8080/widgets/${wid}`, {
            method: "PUT",
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(status => dispatch({
                type: 'UPDATE_WIDGET',
                widget: widget
            })),
    deleteWidget: (wid) =>
        fetch(`http://localhost:8080/widgets/${wid}`, {
            method: "DELETE"
        }).then(response => response.json())
            .then(status => dispatch({
                type: 'DELETE_WIDGET',
                widgetId: wid
            })),

    createWidget: (widget) =>
        fetch("http://localhost:8080/widgets", {
            method: "POST",
            body: JSON.stringify(widget),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
            .then(actualWidget => dispatch({
                type: "CREATE_WIDGET",
                widget: actualWidget
            })),
    findWidgetsForTopic: (tid) =>
        fetch(`http://localhost:8080/topics/${tid}/widgets`)
            .then(response => response.json())
            .then(actualWidgets => dispatch({
                type: "FIND_WIDGETS_FOR_TOPIC",
                widgets: actualWidgets
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
