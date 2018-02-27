import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';//used for components to interact with redux
import * as courseActions from '../../actions/courseAction';
import {bindActionCreators} from 'redux';
import propTypes from 'prop-types';
import CourseList from './courseList';
import {Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();
const location = {
    pathname: '/addcourse',
    state: { fromDashboard: true }
  }
  

//this is a container component, hence taking logics to presentational component
class Course extends Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    courseRow(course,index) {
        return <div key={index}>{course.title}</div>
    }

    redirectToAddCoursePage() {
        this.props.history.push(location)
    }

    render() {
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit"
                        value="Add Course"
                        className="btn btn-primary"
                        onClick={this.redirectToAddCoursePage}/>
                        <br/><br/>
                <CourseList courses={courses}/>
            </div>
        )
    }
}

function mapStateToProps(state,ownProps) {
    return {
        courses : state.courses // this state.courses is from redux store(reducers/index.js)
    }
}

// list of actions in a component
function mapDispatchToProps(dispatch){
    return {
        //this is manual way of writing actions..
        //createCourse: course => dispatch(courseActions.createCourse(course))
        // lets write it automated using bindActionsCreators
        actions: bindActionCreators(courseActions,dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Course); //wrap Course page with connect. 
//ES6 calling with two functions sidebyside. One function after other with return result

//also you can write the same above connect like this
//const connectedStateAndProps = connect(mapStateToProps,mapDispatchToProps);
//export default connectedStateAndProps(Course);