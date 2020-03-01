import React from 'react';
import logo from './logo.svg';
import './App.css';
import CourseManagerContainer from "./containers/CourseManagerContainer";
import OmdbComponent from "./OmdbAPI/omdbComponent";

const App = () =>
    <div className={`container`}>
        <CourseManagerContainer/>
    </div>

export default App;
