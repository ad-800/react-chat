import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from '../components/message';

import { fetchMessages } from '../actions';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages();
  }

  render() {
    return (
      <div>
        {this.props.messageList.map(message => <Message key={message.created_at} message={message} />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messageList: state.messageList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
