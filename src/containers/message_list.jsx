import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../components/message';

class MessageList extends Component {
  renderMessages = () => {
    return this.props.messages.map((message) => {
      return <Message key={message.created_at} message={message} />;
    });
  }

  render() {
    return (
      <div>
        {this.renderMessages}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messageList
  };
}

export default connect(mapStateToProps)(MessageList);
