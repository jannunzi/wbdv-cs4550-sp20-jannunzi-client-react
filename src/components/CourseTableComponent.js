import React from "react";

const CourseTableComponent = ({courses, deleteCourse}) =>
    <div>
        <h2>Course Table Component {courses.length}</h2>
        <ul>
            {
                courses.map(function(course, index){
                    return (
                        <li key={index}>
                            {course.title}
                            <button onClick={() => deleteCourse(course)}>Delete</button>
                        </li>
                    )
                })
            }
        </ul>
    </div>

export default CourseTableComponent
