import AuthorApi from '../api/mockAuthorApi';

// export function createCourse(course) {
//     return { type: 'CREATE_COURSE', 
//         course // this is ES6 short-hand properties name. equivalent to 'course: course' in ES5
//     }
// }

export function loadAuthorsSuccess(authors){
    return {type: 'LOAD_AUTHORS_SUCCESS', authors};
}

export function loadAuthors(){
    return function(dispatch){
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        })
    }
}