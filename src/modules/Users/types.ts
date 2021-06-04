export type User = {
    id: number,
    name: string,
    following?: number[],
    interests?: number[],
    collapsed: boolean
}

export type Interest = {
    id: number,
    name: string
}

export type Users = User[]
export type Interests = Interest[]

export type OnClickUser = (user: User) => void
export type DeleteUser = (user: User, event: any) => void
export type Deleteinterest = (interest: Interest, event: any,userId:number) => void
export type InitializeUsers = () => void
