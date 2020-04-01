import React from 'react';
import UserCard from './UserCard';

export const UserCardList = ({ users }) => {
    return (
        <div>
            <div>
                {users.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default UserCardList;