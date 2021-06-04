import { useEffect, useState } from "react"
import fetchedUsers from '../../../../Data/users.json'
import fetchedInterests from '../../../../Data/interests.json'
import UsersList from "../UsersList/UsersList"
import { User, Users, Interest } from '../../types'
import UsersHeader from "../UsersHeader/UsersHeader"
import { DownOutlined } from "@ant-design/icons"

const UsersContainer = () => {
    const [users, setUsers] = useState([] as any)
    const [interests] = useState(fetchedInterests)

    const initializeUsers = () => {
        let sortedUsers: Users = fetchedUsers.map(obj => ({ ...obj, collapsed: true })).sort((first, second) => first.following.length - second.following.length)
        setUsers(sortedUsers)
    }

    const onClickUser = (user: User) => {
        let index = users.findIndex((item: User) => item.id === user.id)
        users[index].collapsed = !users[index].collapsed
        setUsers([...users])
    }

    const deleteUser = (user: User, event: any) => {
        event.stopPropagation()
        let filteredUsers = users.filter((item: User) => item.id !== user.id)
        setUsers(filteredUsers)
    }

    const deleteinterest = (interest: Interest, event: any, userId: number) => {
        event.stopPropagation()
        let filteredUsers = users.map((item: User) => {
            if (item.interests && item.id === userId) {
                return { ...item, interests: item.interests.filter((interestsItem) => interestsItem !== interest.id) }
            }
            else return item
        })
        setUsers(filteredUsers)
    }

    useEffect(() => {
        initializeUsers()
    }, [])

    return (
        <div>
            <div className="container">
                <div className="items">
                    <UsersHeader />
                    <UsersList users={users} interests={interests} onClickUser={onClickUser} deleteUser={deleteUser} deleteinterest={deleteinterest} initializeUsers={initializeUsers} />
                </div>
                <span className='note-wrapper'>Note : to see expandable list of interests for a user , Click on the user Item which has a " <i><DownOutlined /></i>"  before its name</span>

            </div>
        </div>
    );
}

export default UsersContainer;