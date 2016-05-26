import React from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Password from './password';
import Username from './username';
import StartButton from './startButton';
import { withRouter } from 'react-router'

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 100,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleStartButtonClick = this.handleStartButtonClick.bind(this);
    this.state = {
      username: '',
      password: '',
      buttonDisabled: true
    };
  }

  handleUsernameChange(username) {
      this.state.username = username;
      this.setState({
          buttonDisabled: this.state.username.length === 0 ||
              this.state.password.length === 0
      });
  }

  handlePasswordChange(password) {
      this.state.password = password;
      this.setState({
          buttonDisabled: this.state.username.length === 0 ||
              this.state.password.length === 0
      });
  }

  handleStartButtonClick() {
      console.log('start button clicked')
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <Username onUsernameChange={this.handleUsernameChange}/>
          <Password onPasswordChange={this.handlePasswordChange}/>
          <StartButton
            label='Start Media Server'
            disabled={this.state.buttonDisabled}
            onClick={this.handleStartButtonClick}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(Login)
