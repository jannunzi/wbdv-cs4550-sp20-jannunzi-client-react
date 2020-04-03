import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {findAllCourses, deleteCourse, createCourse, updateCourse} from "../services/CourseService";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import CourseListComponent from "../components/CourseListComponent";
import Home from "../components/Home";
import Register from "../components/users/Register";
import Profile from "../components/users/Profile";

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        showEditor: false,
        newCourseTitle: 'Whatever',
        courses: []
    }

    componentDidMount = async () => {
        findAllCourses()
            .then(courses => this.setState({
            courses: courses
        }))
    }

    setLayout = (layout) =>
        this.setState({
            layout: layout
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

    saveCourse = course =>
        updateCourse(course._id, course)
            .then(status => this.setState(prevState => ({
                courses: prevState.courses.map(_course =>
                    _course._id === course._id ? course: _course
                )
            })))

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
                <Router>

                    <Route
                        path="/"
                        exact={true}
                        component={Home}
                    />

                    <Route
                        path="/register"
                        exact={true}
                        component={Register}
                    />

                    <Route
                        path="/profile"
                        exact={true}
                        component={Profile}
                    />

                    <Route path="/course/:courseId/topic/:topicId"
                           exact={true}
                           render={(props) =>
                               <CourseEditorComponent
                                   {...props}
                                   topicId={props.match.params.topicId}
                                   courseId={props.match.params.courseId}/>
                           }/>
                    <Route path="/course/:courseId"
                           exact={true}
                           render={(props) =>
                               <CourseEditorComponent
                                   {...props}
                                   courseId={props.match.params.courseId}/>
                           }/>
                    <Route path="/course/:courseId/module/:moduleId"
                           exact={true}
                           render={(props) =>
                               <CourseEditorComponent
                                   {...props}
                                   moduleId={props.match.params.moduleId}
                                   courseId={props.match.params.courseId}/>
                           }/>
                    <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId"
                           exact={true}
                           render={(props) =>
                               <CourseEditorComponent
                                   {...props}
                                   lessonId={props.match.params.lessonId}
                                   moduleId={props.match.params.moduleId}
                                   courseId={props.match.params.courseId}/>
                           }/>
                    <Route path="/layout/:layout"
                           exact={true}
                           render={() =>
                               <CourseListComponent
                                   setLayout={this.setLayout}
                                   updateForm={this.updateForm}
                                   newCourseTitle={this.state.newCourseTitle}
                                   addCourse={this.addCourse}
                                   layout={this.state.layout}
                                   showEditor={this.showEditor}
                                   courses={this.state.courses}
                                   saveCourse={this.saveCourse}
                                   deleteCourse={this.deleteCourse}
                               />
                           }/>
                </Router>
            </div>
        )
    }
}

export default CourseManagerContainer
