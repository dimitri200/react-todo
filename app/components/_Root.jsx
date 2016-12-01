import React from 'react';
import uuid from 'node-uuid';

import TodoAPI from 'TodoAPI';
import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import TodoAdd from 'TodoAdd';


class _Root extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
            todos: TodoAPI.getTodos()
        };

        this.onSearch = this.onSearch.bind(this);
        this.onToggle = this.onToggle.bind(this);
        this.onTodoAdd = this.onTodoAdd.bind(this);
        this.filterTodos = this.filterTodos.bind(this);
    }

    componentDidUpdate() {
        TodoAPI.setTodos(this.state.todos)
    }

    onSearch (searchText, showAll) {
        this.setState({
            showAll,
            searchText: searchText.toLowerCase()
        });
    }

    onToggle (id) {
        let updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({todos: updatedTodos});
    }

    onTodoAdd (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        });
    }

    filterTodos() {
        let {searchText, showAll, todos} = this.state;

        let filteredTodos = todos;

        // filter by showAll
        filteredTodos = filteredTodos.filter(todo => {
            return !todo.completed || showAll;
        });

        // filter by searchText
        filteredTodos = filteredTodos.filter(todo => {
            let todoText = todo.text.toLowerCase();
            return todoText.indexOf(searchText) > -1;
        });

        return filteredTodos;
    }

    render () {
        let filteredTodos = this.filterTodos();
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-10 col-sm-9 col-md-7'>
                        <h3 className='page-header'>React Todo App</h3>
                        <ul className="list-group">
                            <TodoSearch onSearch={this.onSearch}/>
                            <TodoList todos={filteredTodos} onToggle={this.onToggle}/>
                            <TodoAdd onTodoAdd={this.onTodoAdd}/>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default _Root;
