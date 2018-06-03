import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/chat';
import Login from "./components/login";
import api from "./utils/api";

class App extends React.Component {
  componentDidMount() {
    api.open();
    api.listen((msg) => {
      console.log(msg);
    });
  }

  render() {
    return <div>
      {/*<Login/>*/}
      <Chat/>
    </div>;
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));