import {COURSE_ID_URL, COURSE_ID_URL_ID} from "../constants";

export const updateCourse = (courseId, course) =>
    fetch(COURSE_ID_URL_ID(courseId), {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const createCourse = (course) =>
    fetch(COURSE_ID_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const findAllCourses = async () => {
    const response = await fetch(COURSE_ID_URL)
    return await response.json()
}

export const deleteCourse = async (courseId) =>
{
    const response = await fetch(`${COURSE_ID_URL}/${courseId}`, {
        method: 'DELETE'
    })
    return await response.json()
}
