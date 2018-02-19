import courseApi from '../api/mockCourseApi';

export function createCourse(course) {
    return { type: 'CREATE_COURSE', 
        course // this is ES6 short-hand properties name. equivalent to 'course: course' in ES5
    }
}

export function loadCoursesSuccess(courses){
    return {type: 'LOAD_COURSES_SUCCESS', courses};
}

export function loadCourses(){
    return function(dispatch){
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        })
    }
}