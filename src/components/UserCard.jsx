import React from 'react';

export const UserCard = ({ user: { login, avatar_url, html_url } }) => {
    return (
        <div>
            <img src={avatar_url} alt='' className='' style={{ width: '60px' }} />
            <a href={html_url}>
                <h3>{login}</h3>
            </a>
            <div></div>
        </div>
    );
};

export default UserCard;