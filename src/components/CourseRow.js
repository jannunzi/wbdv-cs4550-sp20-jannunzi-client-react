import React from "react";
import {Link} from "react-router-dom";
import Moment from "react-moment";

class CourseRow extends React.Component {

    state = {
        editing: false,
        course: this.props.course
    }

    render() {
        return(
            <li className={`list-group-item`}>
                {
                    !this.state.editing &&
                    <div className={`row`}>
                        <div className={`col-7`}>
                        <Link to={`/course/${this.props.course._id}`}>
                            <i className={`fa fa-file`}/>
                            <span className="jga-margin-left-10px">
                                {this.props.course.title}
                            </span>
                        </Link>
                        </div>
                        <div className={`col-4`}>
                            <Moment
                                className={`jga-nowrap`}
                                format="MM/DD/YYYY hh:mm:ss">
                                {this.props.course._updatedAt}
                            </Moment>
                        </div>
                        <div className={`col-1`}>
                            <span className="float-right">
                                <button
                                    className={`btn btn-primary`}
                                    onClick={() => {
                                        this.setState({
                                            editing: true
                                        })}}>
                                    <i className={`fa fa-pencil`}/>
                                </button>
                            </span>
                        </div>
                    </div>
                }
                {
                    this.state.editing &&
                    <div className="row">
                        <div className="col-9">
                            <input
                                className="form-control"
                                onChange={e => {
                                    const newTitle = e.target.value
                                    this.setState(prevState => ({
                                        course: {...prevState.course, title: newTitle}
                                    }))
                                }}
                                value={this.state.course.title}/>
                        </div>
                        <div className="col-3">
                            <span className={`float-right`}>
                                <button
                                    className={`btn btn-success`}
                                    onClick={() => {
                                        this.props.saveCourse(this.state.course)
                                        this.setState({
                                            editing: false
                                        })}}>
                                    <i className={`fa fa-save`}/>
                                </button>
                                <button
                                    className={`btn btn-danger jga-margin-left-10px`}
                                    onClick={() =>
                                        this.props.deleteCourse(this.props.course)}>
                                    <i className="fa fa-trash"/>
                                </button>
                                <button
                                    className={`btn btn-info jga-margin-left-10px`}
                                    onClick={() => this.setState({
                                        editing: false
                                    })}>
                                    <i className="fa fa-remove"/>
                                </button>
                            </span>
                        </div>
                    </div>
                }
            </li>
        )
    }
}

export default CourseRow
