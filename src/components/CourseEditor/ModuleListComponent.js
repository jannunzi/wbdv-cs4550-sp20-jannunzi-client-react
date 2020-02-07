import React from "react";
import {connect} from "react-redux";
import {createModule, deleteModule} from "../../actions/moduleActions";
import moduleService from "../../services/ModuleService"

class ModuleListComponent extends React.Component {

    componentDidMount() {
        this.props.findModulesForCourse(this.props.courseId)
    }

    render() {
        return(
            <ul>
                {this.props.modules && this.props.modules.map(module =>
                    <li key={module._id}>
                        {module.title}
                        <button
                            onClick={() => this.props.deleteModule(module._id)}>
                            Delete
                        </button>
                    </li>
                )}
                <li>
                    <button onClick={() => this.props.createModule(this.props.courseId)}>
                        Create
                    </button>
                </li>
            </ul>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findModulesForCourse: (courseId) =>
            moduleService.findModulesForCourse(courseId)
                .then(actualModules =>
                    dispatch({
                        type: "FIND_ALL_MODULES",
                        modules: actualModules
        })),
        deleteModule: (moduleId) =>
            moduleService.deleteModule(moduleId)
                .then(status =>
                    dispatch(deleteModule(moduleId))),
        createModule: (courseId) => {
            moduleService.createModule(courseId, {
                title: 'New Module'
            }).then(actualModule =>
                dispatch(createModule(actualModule)))
        }
    }
}

export default connect(
    stateToPropertyMapper, dispatchToPropertyMapper)
(ModuleListComponent)
