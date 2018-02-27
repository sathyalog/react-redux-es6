import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseAction';
import CourseForm from './courseForm';

class AddCoursePage extends Component {
    constructor(props,context){
        super(props,context);

        this.state = {
            course:Object.assign({},this.props.course),errors:{}
        }
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({course:course})
    }

    saveCourse(event) {
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course)
    }

    render(){
        return(
            <div>
            <h1>Add Course</h1>
            <CourseForm 
                course={this.state.course}
                onChange = {this.updateCourseState}
                onSave = {this.saveCourse}
                allAuthors = {this.props.authors}
                errors={this.state.errors}
                />
            </div>
        );
    }
}

function mapStateToProgs(state, ownProps) {
    let course = {id:"",watchHref:"",title:"",authorId:"",length:"",category:""};
    
    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + '' + author.lastName
        }
    })
    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions,dispatch)
    };
}

export default connect(mapStateToProgs, mapDispatchToProps)(AddCoursePage)