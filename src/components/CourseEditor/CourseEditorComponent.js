import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import {Link} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import moduleReducer from "../../reducers/moduleReducer";
import lessonReducer from "../../reducers/lessonReducer";
import widgetReducer from "../../reducers/widgetReducer";
import WidgetList from "./WidgetList";

const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer,
    widgets: widgetReducer
})

const store = createStore(rootReducer)

const CourseEditorComponent = ({history, courseId, moduleId, lessonId, topicId}) =>
    <Provider store={store}>
        <div>
            <Link to="/">Back</Link>
            <button onClick={() => history.push("/")}>Close</button>
            <h3>Course Editor {courseId}</h3>

            <div className="row">
                <div className="col-2">
                    <ModuleListComponent
                        courseId={courseId}/>
                </div>
                <div className="col-10">
                    {/*<LessonTabs*/}
                    {/*    moduleId={moduleId}*/}
                    {/*    courseId={courseId}/>*/}
                    {/*<TopicPills*/}
                    {/*    lessonId={lessonId}*/}
                    {/*    moduleId={moduleId}*/}
                    {/*    courseId={courseId}/>*/}

                    <WidgetList topicId={topicId}/>
                </div>
            </div>
        </div>
    </Provider>

export default CourseEditorComponent
