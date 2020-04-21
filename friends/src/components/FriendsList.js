import React from 'react';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friends: [], fetchingData: false
    };

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        // request data with the token
        // set the data to state
       this.setState({...this.state, fetchingData: true});
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
            

                this.setState({ friends: res.data });
                this.setState({...this.state, fetchingData: false});
            })
            .catch(err => console.log({ err }));
    };

    render() {

        return (
            <div className="friends-list">
                    <div className="title">
                            <h2>Friends List</h2>
                        </div>
                        {this.state.fetchingData && (
          <div className="key spinner">
            <Loader type="Puff" color="#204963" height="60" width="60" />
            <p>Loading Data</p>
          </div>
        )}
                <div className="friends-wrapper">
                    {this.state.friends.map(friend =>
                        <div key={friend.id}>
                            <h3>{friend.name} </h3>
                            <p>Age : {friend.age} </p>
                            <p>Email : {friend.email}</p>
                        </div>)}
                </div>
            </div>
        )
    }
}

export default FriendsList
