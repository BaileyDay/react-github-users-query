import React, { Component } from 'react';
import UserCard from './UserCard'

export class UserCardList extends Component {
    render() {
        return (
            <ul className="ProfileCardList" >
                {this.props.userData.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </ul>
        )
    }
}

export default UserCardList; 