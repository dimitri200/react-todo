import React from 'react';

class Todo extends React.Component {
    render () {
        let {id, text, completed, onToggle} = this.props;

        let todoClassName = completed ? 'todo todo-completed list-group-item' : 'todo list-group-item';

        return (
            <div className={todoClassName} onClick={() => onToggle(id)}>
                <p>{text}</p>
            </div>
        );
    }
}

export default Todo;
