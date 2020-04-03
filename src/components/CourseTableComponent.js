import React from "react";
import CourseRow from "./CourseRow";

const CourseTableComponent = ({courses, deleteCourse, showEditor, saveCourse}) =>
    <div>
        <ul className={`list-group`}>
            <li className={`list-group-item`}>
                <div className={`row`}>
                    <div className={`col-7`}>
                        Course
                    </div>
                    {/*<div className={`col-4`}>*/}
                    {/*    Last Updated*/}
                    {/*</div>*/}
                    {/*<div className={`col-1`}>*/}
                    {/*</div>*/}
                </div>
            </li>
            {
                courses.map(function(course, index){
                    return (
                        <CourseRow
                            key={course._id}
                            course={course}
                            showEditor={showEditor}
                            saveCourse={saveCourse}
                            deleteCourse={deleteCourse}/>
                    )
                })
            }
        </ul>
    </div>

export default CourseTableComponent
