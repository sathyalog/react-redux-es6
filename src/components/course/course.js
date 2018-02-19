import React, { Component } from 'react';
import {connect} from 'react-redux';//used for components to interact with redux
import * as courseActions from '../../actions/courseAction';
import {bindActionCreators} from 'redux';

class Course extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            course: { title: '' }
        }
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course })
    }

    onSubmit() {
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course,index) {
        return <div key={index}>{course.title}</div>
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange}
                    value={this.state.course.title} />
                <input type="submit" value="Save"
                    onClick={this.onSubmit} />
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