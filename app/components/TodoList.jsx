import React from 'react';

import Todo from 'Todo';

class TodoList extends React.Component {
    render () {
        let {todos, onToggle} = this.props;

        let displayTodo = () => {
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
}

export default TodoList;
