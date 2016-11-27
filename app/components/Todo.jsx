var React = require('react');

var Todo = React.createClass({

    render: function() {
        var {id, text, completed, onToggle} = this.props;

        var todoClassName = completed ? 'todo todo-completed list-group-item' : 'todo list-group-item';

        return (
            <div className={todoClassName} onClick={() => onToggle(id)}>
                <p>{text}</p>
            </div>
        );
    }

});

module.exports = Todo;
