import React from "react";

const ModuleListComponent = ({modules}) =>
    <ul>
        {modules.map(module =>
            <li key={module._id}>
                {module.title}
            </li>
        )}
    </ul>

export default ModuleListComponent
