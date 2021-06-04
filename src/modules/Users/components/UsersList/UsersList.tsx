
import { User, Users, Interests, OnClickUser, DeleteUser, Deleteinterest, InitializeUsers } from '../../types'
import UsersEmptyState from '../UsersEmptyState/UsersEmptyState'
import UsersItem from '../UsersItem/UsersItem'

type Props = {
    users: Users,
    interests: Interests,
    onClickUser: OnClickUser
    deleteUser: DeleteUser
    deleteinterest: Deleteinterest,
    initializeUsers: InitializeUsers
}

const UsersList = (props: Props) => {
    const { users, deleteUser, deleteinterest, interests, onClickUser, initializeUsers } = props
    return (
        <div className="items-body">
            {users.length === 0 ?
                <UsersEmptyState initializeUsers={initializeUsers} /> :
                users.map((userItem: User) => (
                    <UsersItem key={userItem.id} userItem={userItem} deleteUser={deleteUser} deleteinterest={deleteinterest} onClickUser={onClickUser} interests={interests} />
                ))}
        </div>

    );
}

export default UsersList;


