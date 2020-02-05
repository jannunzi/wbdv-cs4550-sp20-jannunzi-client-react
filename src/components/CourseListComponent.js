import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import React from "react";

const CourseListComponent =
    ({
         toggle,
         updateForm,
         newCourseTitle,
         addCourse,
         layout,
         showEditor,
         courses,
         deleteCourse
     }) =>
<div>
    <button onClick={toggle}>Toggle</button>
    <input
        onChange={(e) => updateForm({
            newCourseTitle: e.target.value
        })}
        value={newCourseTitle}/>
    <button onClick={addCourse}>Add Course</button>
    {
        layout === 'table' &&
        <CourseTableComponent
            showEditor={showEditor}
            deleteCourse={deleteCourse}
            courses={courses}/>
    }
    {
        layout === 'grid'
        && <CourseGridComponent
            courses={courses}/>
    }
</div>

export default CourseListComponent
