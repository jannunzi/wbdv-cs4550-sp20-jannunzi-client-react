import React from "react";
import {connect} from "react-redux";
import {CREATE_MODULE, createModule, DELETE_MODULE, deleteModule} from "../../actions/moduleActions";
import moduleService, {findModuleForCourse} from '../../services/ModuleService'
import {Link} from "react-router-dom";

class ModuleListComponent extends React.Component {
    componentDidMount() {
        // this.props.findModuleForCourse(this.props.courseId)
    }

    render() {
        return (
            <ul className={`list-group`}>
                {this.props.modules && this.props.modules.map((module, index) =>
                    <li key={module._id}
                        className={`list-group-item ${index === 1?'active':''}`}>
                        {/*<button onClick={*/}
                        {/*    () => this.props.deleteModule(module._id)}>*/}
                        {/*    Delete*/}
                        {/*</button>*/}
                        {module.title}
                    </li>
                )}
                {/*<li className={`list-group-item`}>*/}
                {/*    <button className={`btn btn-primary btn-block`} onClick={*/}
                {/*        () => this.props.createModule(this.props.courseId)}>*/}
                {/*        <i className={`fa fa-plus`}/>*/}
                {/*    </button>*/}
                {/*</li>*/}
            </ul>
        );
    }
}

const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules.modules
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findModuleForCourse: (courseId) =>
            moduleService.findModuleForCourse(courseId)
                .then(actualModules => dispatch({
                    type: 'FIND_MODULES_FOR_COURSE',
                    modules: actualModules
                })),
        findAllModules: () =>
            // TODO: move all server access to ModuleService.js
            fetch("https://wbdv-generic-server.herokuapp.com/api/jannunzi/modules")
                .then(response => response.json())
                .then(actualModules =>
                dispatch({
                   type: "FIND_ALL_MODULES",
                   modules: actualModules
                })),
        deleteModule: (moduleId) =>
            moduleService.deleteModule()
                .then(status =>
                    dispatch(deleteModule(moduleId))),
        createModule: (courseId) => {
            fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses/${courseId}/modules`, {
                method: "POST",
                body: JSON.stringify({title: "New Module"}),
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(actualModule =>
            dispatch(createModule(actualModule)))
        }
    }
}

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleListComponent)
