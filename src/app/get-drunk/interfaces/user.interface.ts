// export interface User{
//     id: number;
//     name?: string;
//     lastName?: string;
//     email: string;
//     message? :string;
// }

export interface Users {
    user: User[];
}

export interface User {
    id:       number;
    name:     string;
    lastName: string;
    email:    string;
    password: string;
}
