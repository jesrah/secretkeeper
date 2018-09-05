import React from 'react';
import PropTypes from 'prop-types';
import ListItems from 'components/ListItems';
import Ul from 'components/Ul'

const List = ({ loading, error, secrets }) => {
	let data;
	if (secrets) {
		data = secrets.map(ele => <ListItems>{ele.secret}</ListItems>);
	}
	if (loading && !secrets) {
		data = <ListItems>Loading...</ListItems>
	}
	if (error) {
		data = <ListItems>Oops, couldn't find any secrets. Better refresh!</ListItems>
	}
	// if (data) {
	// 	return <ListItem>{data}</ListItem>
	// }
	return <Ul>{ data }</Ul>
}

List.propTypes = {
	loading: PropTypes.bool,
	error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
	secrets: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
}

export default List;