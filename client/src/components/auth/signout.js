import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { browserHistory } from 'react-router';

class Signout extends Component {
	componentWillMount() {
		this.props.signoutUser();
	}

	componentDidMount() {
		setTimeout(() => {
			browserHistory.push('/');
		}, 1000);
	}

	render() {
		return (
			<div>
				Sorry to see you go...
			</div>
		);
	}
}

export default connect(null, actions)(Signout);