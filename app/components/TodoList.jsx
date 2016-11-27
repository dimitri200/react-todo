var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({

    render: function() {
        var {todos, onToggle} = this.props;

        var displayTodo = () => {
            if (todos.length === 0) {
                return <div className='container__message'>You've done it all!</div>;
            }

            return todos.map((todo, index) => {
                return (
                        <Todo key={index} {...todo} onToggle={onToggle}/>
                );
            });
        };

        return (
            <div>
                {displayTodo()}
            </div>
        );
    }

});

module.exports = TodoList;
