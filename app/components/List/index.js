import React from 'react';
import PropTypes from 'prop-types';
import ListItems from '../../components/ListItems';

const List = ({ loading, error, strings }) => {
	let data;
	if (strings) {
		data = strings.map(ele => <ListItems>{ele.string}</ListItems>);
	}
	if (loading) {
		data = <ListItems>Loading...</ListItems>
	}
	if (error) {
		data = <ListItems>Oops, couldn't find any secrets. Better refresh!</ListItems>
	}
	// if (data) {
	// 	return <ListItem>{data}</ListItem>
	// }
	return <ul>{data}</ul>
}

List.propTypes = {
	loading: PropTypes.bool,
	error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
	strings: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default List;