export function createCourse(course) {
    return { type: 'CREATE_COURSE', 
        course // this is ES6 short-hand properties name. equivalent to 'course: course' in ES5
    }
}