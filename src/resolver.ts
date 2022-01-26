
const users = [
    {id: 1, name: 'Ram', location: 'Chennai'},
    {id: 2, name: 'Hari', location: 'Germany'}
]

export function getUser(paramValue: any, args: any) {
    return users.find(user => user.id === args.id);
}