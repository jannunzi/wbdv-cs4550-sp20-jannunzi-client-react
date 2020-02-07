
const lessonReducer = (state, action) => {
    return {
        lessons: [
            {title: "Lesson 0000", _id: "000"},
            {title: "Lesson 123", _id: "123"},
            {title: "Lesson 234", _id: "234"},
            {title: "Lesson 345", _id: "345"},
            {title: "Lesson 456", _id: "456"}
        ]
    }
}

export default lessonReducer
