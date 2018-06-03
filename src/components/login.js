import React from 'react';

import TextInput from './textInput';

/**
 * Created by PSWIDERSKI on 26.05.2018.
 */

class Login extends React.Component {

  onSubmit = (state) => {
    if (state.user) {

      alert(state.user);
    }
  };

  render() {
    const props = this.props;
    return <div>
      <TextInput label={"Zaloguj"} placeholder={"Nazwa Użytkownika"}
                 onSubmit={this.onSubmit}/>
    </div>;
  }
}

export default Login;


