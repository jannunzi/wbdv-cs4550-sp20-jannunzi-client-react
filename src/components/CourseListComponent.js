import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import React from "react";

export default class CourseListComponent extends React.Component {
    state = {
        editingCourse: {},
        myListAsString: 'This is initial value'
    }
    render() {
        return(
            <div>
                <h2>Course List</h2>
                <textarea
                    onChange={(e) => this.setState({
                        myListAsString: e.target.value
                    })}
                    value={this.state.myListAsString}
                    className={`form-control`}></textarea>
                {this.state.myListAsString}
                <ul>
                    {
                        this.state.myListAsString.split('\n')
                            .map((individualLine, index) =>
                                <li key={index}>{individualLine}</li>
                            )
                    }
                </ul>
                <input
                    onChange={(e) => this.props.updateForm({
                        newCourseTitle: e.target.value
                    })}
                    value={this.props.newCourseTitle}/>
                <button onClick={this.props.addCourse}>Add Course</button>
                {
                    this.props.layout === 'table' &&
                    <button
                        className={`btn btn-default`}
                        onClick={() => this.props.setLayout('grid')}>
                        <i className={`fa fa-th`}/>
                    </button>
                }
                {
                    this.props.layout === 'grid' &&
                    <button
                        className={`btn btn-default`}
                        onClick={() => this.props.setLayout('table')}>
                        <i className={`fa fa-list`}/>
                    </button>
                }
                {
                    this.props.layout === 'table' &&
                    <CourseTableComponent
                        saveCourse={this.props.saveCourse}
                        showEditor={this.props.showEditor}
                        deleteCourse={this.props.deleteCourse}
                        courses={this.props.courses}/>
                }
                {
                    this.props.layout === 'grid'
                    && <CourseGridComponent
                        courses={this.props.courses}/>
                }
            </div>
        )
    }
}
