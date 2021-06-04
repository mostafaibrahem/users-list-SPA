import { InitializeUsers } from "../../types"

type Props = {
    initializeUsers: InitializeUsers
}
const UsersEmptyState = (props: Props) => {
    const { initializeUsers } = props
    return (
        <div className='users-empty-state'>
            you have been deleted All Users ,
            <span onClick={() => initializeUsers()}>Reset Users?</span></div>

    )
}
export default UsersEmptyState