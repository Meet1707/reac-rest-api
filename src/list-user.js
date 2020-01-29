import React from 'react';
import axios from 'axios';
class ListUsers extends React.Component {
    state = {
        user: [],
    }
    componentDidMount() {
        axios.get('https://node-fake-api.herokuapp.com/user/')
            .then(res => {
                this.setState({ user: res.data.data });
            })
            .catch(err => console.log("Error" + err));
    }
    render() {
        let { user } = this.state;
        return (
            <div className="side-bar">
                {
                    user.map(u => {
                        return (<button className="btn btn-link"
                                    id={u.id} onClick={(e) => this.props.click(e)}>
                                    {u.first_name}
                                </button>)
                    })
                }
            </div>
        );
    }
}

export default ListUsers;