import React from 'react';
import './style.scss';
import ListUsers from './list-user';
import UserDetail from './user-detail';
class App extends React.Component {
  state = {
    userId: 0
  }
  onButtonClick(id) {
    this.setState({
      userId: id
    })
  }
  render() {
    return (
      <div className="maincontainer">
        <div className="div1">
          <ListUsers click={(event) => this.onButtonClick(event.target.id)} />
        </div>
        <div className="div2">
          <UserDetail userData={this.state.userId} />
        </div>
      </div>);
  }
}

export default App;
