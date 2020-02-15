import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {findAllCourses, deleteCourse, createCourse} from "../services/CourseService";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import CourseListComponent from "../components/CourseListComponent";

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        showEditor: false,
        newCourseTitle: 'Whatever',
        courses: []
    }

    componentDidMount = async () => {
        const courses = await findAllCourses()
        this.setState({
            courses: courses
        })
    }

    toggle = () =>
        this.setState(prevState => {
            if(prevState.layout === 'table') {
                return ({
                    layout: 'grid'
                })
            } else {
                return ({
                    layout: 'table'
                })
            }
        })

    deleteCourse = (course) =>
        deleteCourse(course._id)
            .then(status => {
                this.setState(prevState => {
                    return ({
                        courses: prevState
                            .courses
                            .filter(function(crs) {
                                return crs._id !== course._id
                            })
                    })
                })
            })

    addCourse = () =>
        createCourse({
            title: this.state.newCourseTitle
        }).then(actualCourse => this.setState(prevState => {
                return({
                    courses: [
                        ...prevState.courses,
                        actualCourse
                    ]
                })
            })
        )

    showEditor = () =>
        this.setState({
            showEditor: true
        })

    hideEditor = () =>
        this.setState({
            showEditor: false
        })

    updateForm = (newState) => {
        this.setState(newState)
    }

    render() {
        return(
            <div>
                <h1>Course Manager</h1>

                {/*<Router>*/}

                {/*    <Link to="/page1">*/}
                {/*        Page 1*/}
                {/*    </Link>*/}
                {/*    <Link to="/page2">*/}
                {/*        Page 2*/}
                {/*    </Link>*/}

                {/*    <Route path="/page1" component={Page1}/>*/}
                {/*    <Route path="/page2/:message"*/}
                {/*           exact={true}*/}
                {/*           component={Page2}/>*/}
                {/*</Router>*/}

                <Router>

                    <Route path="/course-editor/:courseId/topic/:topicId"
                           exact={true}
                           render={(props) =>
                               <CourseEditorComponent
                                   {...props}
                                   topicId={props.match.params.topicId}
                                   courseId={props.match.params.courseId}/>
                           }/>
                    <Route path="/course-editor/:courseId"
                           exact={true}
                           render={(props) =>
                               <CourseEditorComponent
                                   {...props}
                                   courseId={props.match.params.courseId}/>
                           }/>
                    <Route path="/course-editor/:courseId/module/:moduleId"
                           exact={true}
                           render={(props) =>
                               <CourseEditorComponent
                                   {...props}
                                   moduleId={props.match.params.moduleId}
                                   courseId={props.match.params.courseId}/>
                           }/>
                    <Route path="/course-editor/:courseId/module/:moduleId/lesson/:lessonId"
                           exact={true}
                           render={(props) =>
                               <CourseEditorComponent
                                   {...props}
                                   lessonId={props.match.params.lessonId}
                                   moduleId={props.match.params.moduleId}
                                   courseId={props.match.params.courseId}/>
                           }/>
                    <Route path="/"
                           exact={true}
                           render={() =>
                               <CourseListComponent
                                   toggle={this.toggle}
                                   updateForm={this.updateForm}
                                   newCourseTitle={this.state.newCourseTitle}
                                   addCourse={this.addCourse}
                                   layout={this.state.layout}
                                   showEditor={this.showEditor}
                                   courses={this.state.courses}
                                   deleteCourse={this.deleteCourse}
                               />
                           }/>
                </Router>
            </div>
        )
    }
}

export default CourseManagerContainer
