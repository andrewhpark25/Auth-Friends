import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddFriends extends React.Component {
  state = {
    friend: {
      name: '',
      age: '',
      email: ''
    }
  };

  handleChanges = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  submitFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/friends', this.state.friend)
      .then(res => {
        console.log(res.data);
        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
              }
      })
  })
  .catch(err => console.log({ err }));
}

  render() {
    return (
      <div>
     <form>
            Name:
         <input
            className="name-input"
            type="text"
            name="name"
            value={this.state.friend.name}
            onChange={this.handleChanges}
          />
         <p> Age:
            <input
            className="age-input"
            type="text"
            name="age"
            value={this.state.friend.age}
            onChange={this.handleChanges}
          /> </p>
          <p>
               Email:
            <input
            className="height-input"
            type="email"
            name="email"
            value={this.state.friend.email}
            onChange={this.handleChanges}
          /> </p>
         <button onClick={this.submitFriend}>
				Add New Friend
			</button>
        </form>
      </div>
    );
  }
}

export default AddFriends;
