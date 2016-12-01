import React from 'react';

class TodoAdd extends React.Component {

    onSubmit(e){
        e.preventDefault();

        let newTodo = this.refs.newTodo.value.trim();
        if (newTodo.length > 0) {
            this.refs.newTodo.value = '';
            this.props.onTodoAdd(newTodo);
        }
            this.refs.newTodo.focus();
    }

    render() {
        return (
            <div className='container__footer'>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className='form-group has-success'>
                        <input type='text' className='form-control input-lg' ref='newTodo' placeholder='Add new todo'/>
                    </div>
                    <button className='btn btn-lg btn-block btn-success'> Add Todo </button>
                </form>
            </div>
        );
    }

}

export default TodoAdd;
