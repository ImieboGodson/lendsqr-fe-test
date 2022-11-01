
interface LoginProfile {
    id: string;
    email: string;
    password: string;
}

export const Profiles: LoginProfile[] = [
    {
        id: "12",
        email: "test.user@sample.com",
        password: "testlender"
    }
]


interface UsersData {
    id: string;
    icon: string; 
    color: string;
    title: string;
    value: string;
}

export const UsersDataArray: UsersData[] = [
    {
        id: '1',
        icon: '/icons/users-icon.svg', 
        color: 'rgba(223, 24, 255, 0.1)', 
        title: 'users', 
        value: '113,039'
    },
    {
        id: '2',
        icon: '/icons/active-users-icon.svg', 
        color: 'rgba(87, 24, 255, 0.1)', 
        title: 'active users', 
        value: '2,345'
    },
    {
        id: '3',
        icon: '/icons/users-with-loans-icon.svg', 
        color: 'rgba(245, 95, 68, 0.1)', 
        title: 'users with loans', 
        value: '12,453'
    },
    {
        id: '4',
        icon: '/icons/users-with-savings-icon.svg', 
        color: 'rgba(255, 51, 102, 0.1)', 
        title: 'users with savings', 
        value: '102,453'
    }
]
