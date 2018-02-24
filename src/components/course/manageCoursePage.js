import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseAction';
import CourseForm from './courseForm';

class ManagerCoursePage extends Component {
    constructor(props,context){
        super(props,context);

        this.state = {
            course:Object.assign({},this.props.course),errors:{}
        }
    }

    render(){
        return(
            <div>
            <h1>Manage Course</h1>
            <CourseForm 
                course={this.state.course}
                allAuthors = {[]}
                errors={this.state.errors}
                />
            </div>
        );
    }
}

function mapStateToProgs(state, ownProps) {
    let course = {id:"",watchHref:"",title:"",authorId:"",length:"",category:""};
    return {
        course: course
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions,dispatch)
    };
}

export default connect(mapStateToProgs, mapDispatchToProps)(ManagerCoursePage)