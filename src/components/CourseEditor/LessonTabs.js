import React from "react";
import {connect} from "react-redux";

const LessonTabs = ({lessons}) =>
    <ul>
        {
            lessons && lessons.map(lesson =>
                <li key={lesson._id}>
                    {lesson.title}
                </li>
            )
        }
    </ul>

const stateToPropertyMapper = (state) => ({
    lessons: state.lessons.lessons
})

export default connect(stateToPropertyMapper)
(LessonTabs)

