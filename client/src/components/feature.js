import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Feature extends Component {
	componentWillMount() {
		this.props.fetchMessage();
	}

	render() {
		return (
			<div className="center">
				<iframe src="http://cyyeh.github.io/" title="ChihYu's Blog" width="100%" height="500px" frameBorder="0">
  				<p>Your browser does not support iframes.</p>
				</iframe>
				{this.props.message}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		message: state.auth.message
	};
}

export default connect(mapStateToProps, actions)(Feature);