import React from 'react'
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [{
        id: 'u1',
        image: 'https://www.shareicon.net/data/2016/09/01/822727_user_512x512.png',
        name: 'Carol',
        places: 3
    }];
    return <UsersList items={USERS} />
}

export default Users;