import React from 'react';

class SearchBar extends React.Component {

	state={inputSearch: ''};

	//funtion to set state from from inputSearch value
	onInputChange = e=> {
		this.setState({inputSearch: e.target.value});
	};

	//function calls to handleSearchSubmit in App component
	 onFormSubmit = e=> {
	 	//prevent reloading page
	 	e.preventDefault();
		this.props.onFormSubmit(this.state.inputSearch);
	};

	render(){


		return (

			<div className="search-bar ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form"> 
					<div className="field">
					<label>Video Search</label>
					<input type="text" value={this.state.inputSearch} onChange={this.onInputChange} />
					</div>
				</form>
			</div>
			);

	}

}

export default SearchBar;
//