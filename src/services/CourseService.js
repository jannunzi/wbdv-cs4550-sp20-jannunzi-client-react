import {API_URL} from "../constants";

export const createCourse = (course) =>
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findAllCourses = async () => {
    const response = await fetch(API_URL)
    return await response.json()
}

export const deleteCourse = async (courseId) =>
{
    const response = await fetch(`${API_URL}/${courseId}`, {
        method: 'DELETE'
    })
    return await response.json()
}
