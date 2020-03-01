import React from "react";
import {connect} from "react-redux";

class TopicPills extends React.Component {
    componentDidMount() {
        this.props.findAllTopics()
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.topics.map(topic =>
                            <li key={topic.id}>
                                {topic.title}</li>
                        )
                    }
                </ul>

            </div>
        );
    }
}

const stateMapper = (state) => ({
    topics: state.topics.topics
})

const dispathMapper = (dispatcher) => ({
    findAllTopics: () =>
        fetch("http://localhost:8080/api/topics")
            .then(res => res.json())
            .then(topics => dispatcher({
                type: "SET_TOPICS",
                topics: topics
            }))
})

export default connect(stateMapper, dispathMapper)
(TopicPills)
