import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";

const CourseEditorComponent = ({hideEditor}) =>
    <div>
        <button onClick={hideEditor}>Close</button>
        <h3>Course Editor</h3>

        <div className="row">
            <div className="col-4">
                <ModuleListComponent
                    modules={[
                        {_id: "123", title: "CSS"},
                        {_id: "234", title: "HTML"},
                        {_id: "345", title: "React"}
                    ]}/>
            </div>
            <div className="col-8">
                <LessonTabs/>
                <TopicPills/>
            </div>
        </div>
    </div>

export default CourseEditorComponent
