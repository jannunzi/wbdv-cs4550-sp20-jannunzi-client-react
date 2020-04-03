import React from "react";
import {connect} from "react-redux";

class TopicPills extends React.Component {
    componentDidMount() {
        // this.props.findAllTopics()
    }

    render() {
        return (
            <div>
                <ul className="nav nav-pills">
                {
                        this.props.topics.map((topic, index) =>
                            <li key={topic.id} className="nav-item">
                                <a className={`nav-link ${index === 1?'active':''}`}
                                   href="#">
                                    {topic.title}
                                </a>
                            </li>)
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
