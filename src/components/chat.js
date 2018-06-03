import React from 'react';

import TextInput from './textInput';
import api from "../utils/api";

/**
 * Created by PSWIDERSKI on 26.05.2018.
 */

const messages = [
  // {id: 1, author: 'Przemek', message: 'Hej!'},
  // {id: 2, author: 'Przemek', message: 'Jak sie masz!?'}
];

const List = (props) => {
  return (
      <div>
        {props.messages.map(message => {
          return <div key={message.id}>
            <b>{message.author}:</b> {message.message}
            <hr/>
          </div>
        })}
      </div>
  )
};

class Chat extends React.Component {

  state = {messages};

  listStyle = {
    borderBottom: '1px solid #d3d3d3',
    padding: '5px 0'
  };

  componentDidMount() {
    api.open();
    api.listen((msg) => {
      const messagesCopy = this.state.messages.concat(
          {
            id: this.state.messages.length + 1,
            author: msg.author,
            message: msg.message
          });
      this.setState({
        messages: messagesCopy
      });
    });
  }

  wyslij = (state) => {
    api.send("JASZCZUR1337",state.message);
  };

  render() {
    const props = this.props;
    return <div>
      <TextInput label={"Napisz"} placeholder={"Tekst do wysłania"}
                 onSubmit={this.wyslij}/>
      <List messages={this.state.messages} style={this.listStyle}/>
    </div>;
  }
}

export default Chat;

