import React from "react";
import {connect} from "react-redux";

class LessonTabs extends React.Component {
    componentDidMount() {
        // this.props.findLessonsForModule(this.props.moduleId)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // if(prevProps.moduleId != this.props.moduleId) {
        //     this.props.findLessonsForModule(this.props.moduleId)
        // }
    }

    render() {
        return(
            <ul className="nav nav-tabs">
            {
                    this.props.lessons && this.props.lessons.map((lesson, index) =>
                        <li className="nav-item"
                            key={lesson._id}>
                            <a className={`nav-link ${index===1?'active':''}`} href="#">
                                {lesson.title}
                            </a>
                        </li>
                    )
                }
            </ul>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    lessons: state.lessons.lessons
})

const dispatcherToPropsMapper = (dispatcher) => ({
    findLessonsForModule: (moduleId) => {

    }
})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropsMapper)
(LessonTabs)

