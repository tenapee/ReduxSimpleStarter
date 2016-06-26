import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

import $ from 'jquery';

const API_KEY='AIzaSyDz1rDRnnz-ABbK9jyHGBtdPcDvhBYGFvU';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('.container'));