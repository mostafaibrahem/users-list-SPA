import { DeleteOutlined, DownOutlined, UpOutlined } from "@ant-design/icons"
import { Deleteinterest, DeleteUser, Interest, OnClickUser, User, Interests } from "../../types"

type Props = {
    userItem: User,
    onClickUser: OnClickUser,
    deleteUser: DeleteUser,
    deleteinterest: Deleteinterest,
    interests: Interests
}

const UsersItem = (props: Props) => {
    const { userItem, onClickUser, deleteUser, deleteinterest, interests } = props
    return (
        <div key={userItem.id} className="items-body-content" onClick={() => onClickUser(userItem)} >
            <div className='collapsed-item'>
                <i style={{ visibility: userItem.interests && userItem.interests.length>0 ? 'visible' : 'hidden' }}>{!userItem.collapsed ? <UpOutlined /> : <DownOutlined />}</i>
                <span className='data-flex'> Name: {userItem.name}</span> <span className='data-flex'>following Count :{userItem.following?.length}</span>
                <DeleteOutlined onClick={(event) => deleteUser(userItem, event)} />
            </div>
            {!userItem.collapsed &&
                <>
                    {userItem.interests && userItem.interests.length>0 && <div className='intrests-wrapper'>intrests : {
                        userItem.interests?.map((userinterestsItem) => (
                            interests.map((interestsitem: Interest) => (
                                userinterestsItem === interestsitem.id &&
                                <span key={interestsitem.id}>
                                    {interestsitem.name}
                                    <DeleteOutlined onClick={(event) => deleteinterest(interestsitem, event,userItem.id)} />
                                </span>
                            ))
                        ))
                    }</div>}
                </>}
        </div>
    )
}
export default UsersItem