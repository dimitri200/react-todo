var React = require('react');
var uuid = require('node-uuid');
// var moment = require('moment');

var TodoAPI = require('TodoAPI');
var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');

var _Root = React.createClass({
    getInitialState: function() {
        return {
            searchText: '',
            todos: TodoAPI.getTodos()
        };
    },
    componentDidUpdate: function () {
        TodoAPI.setTodos(this.state.todos)
    },

    onSearch: function(searchText, showAll) {
        this.setState({
            showAll,
            searchText: searchText.toLowerCase()
        });
    },

    onToggle: function (id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({todos: updatedTodos});
    },

    onTodoAdd: function(text) {
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
    },

    filterTodos: function() {
        var {searchText, showAll, todos} = this.state;

        var filteredTodos = todos;

        // filter by showAll
        filteredTodos = filteredTodos.filter(todo => {
            return !todo.completed || showAll;
        });

        // filter by searchText
        filteredTodos = filteredTodos.filter(todo => {
            var todoText = todo.text.toLowerCase();
            return todoText.indexOf(searchText) > -1;
        });

        return filteredTodos;
    },

    render: function() {

        var filteredTodos = this.filterTodos();
        return (
            <div>
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

            </div>
        );
    }

});

module.exports = _Root;
