import React from "react";

class CourseRow extends React.Component {
    state = {
        editing: false
    }
    render() {
        return(
            <li>
                {
                    !this.state.editing &&
                    <a onClick={this.props.showEditor} href="#">
                        {this.props.course.title}
                    </a>
                }
                {this.state.editing && <input/>}
                <button onClick={() => this.props.deleteCourse(this.props.course)}>Delete</button>
                <button onClick={() => {
                    this.setState({
                        editing: true
                    })
                }}>Edit</button>
                <button onClick={() => {
                    this.setState({
                        editing: false
                    })
                }}>Save</button>
            </li>
        )
    }
}

export default CourseRow
