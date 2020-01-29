import React from 'react';
import axios from 'axios';
class UserDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: Number(props.userData),
            user: [],
            show: true
        }
    }
    componentWillReceiveProps(props) {
        let {userId} = this.state;
        if (userId !== props.userData) {
            this.setState({
                userId: Number(props.userData),
                show: false
            }, () => {
                axios.get(`https://node-fake-api.herokuapp.com/user/${this.state.userId}`)
                    .then(res => {
                        //console.log('rewdddds', res.data.data);
                        this.setState({ user: res.data.data });
                    })
                    .catch(err => console.log("Error" + err));
            })
        }
    }
    render() {
        let {show} = this.state;
        let {avatar,first_name,last_name,email} = this.state.user;
        return (
            !show &&
                <div className="user-details">
                    PROFILE
                    <img src={avatar} />
                        <h4>{first_name}<> </>{last_name}</h4>
                    <p>{email}</p>
                </div>
        );
    }
}

export default UserDetail;