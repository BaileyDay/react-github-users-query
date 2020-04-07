import React from 'react';

const UserCard = ({ user: { avatar_url } }) => {
    return (
        <div>
            <img src={avatar_url} alt='' className='' style={{ width: '60px' }} />
        </div>
    );
};

export default UserCard;