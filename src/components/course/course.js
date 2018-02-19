import React, { PropTypes, Component } from 'react';

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
        alert(`Saving ${this.state.course.title}` );
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange}
                    value={this.state.course.title} />
                <input type="submit" value="Save"
                    onClick={this.onSubmit} />
            </div>
        )
    }
}

export default Course;