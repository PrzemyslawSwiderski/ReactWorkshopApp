import React from 'react';

/**
 * Created by PSWIDERSKI on 26.05.2018.
 */
class TextInput extends React.Component {

  state = {
    user: 'Przemek',
    message: ''
  };

  static defaultProps = {
    onSubmit: (state) => {
    },
    placeholder: '',
    label: 'Wyślij'
  };

  render() {
    const props = this.props;
    return <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(this.state);
      }}>
        <input type={"text"}
               placeholder={props.placeholder}
               value={this.state.message}
               onChange={e => {
                 // console.log(e);
                 this.setState({
                   message: e.target.value
                 });
               }}
        />
        <button>{props.label}</button>
      </form>
    </div>;
  }
}

export default TextInput;

