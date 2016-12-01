import React from 'react';


class TodoSearch extends React.Component {
    constructor () {
        super();
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        let {onSearch} = this.props;

        let searchText = this.refs.search.value;
        let showAll = this.refs.showAll.checked; // TRUE or FALSE

        onSearch(searchText, showAll);
    }

    render() {
        return (
            <div className='container__header'>
                <div className='form-group has-success'>
                    <input type='search' className='form-control input-lg' placeholder='Search Todos' ref='search' onChange={this.onChange}/>
                </div>
                <div className='checkbox has-success'>
                    <label>
                        <input type='checkbox' ref='showAll' onChange={this.onChange}/> Show All
                    </label>
                </div>
            </div>
        );
    }

}

export default TodoSearch;
