import {GraphQLInt, GraphQLObjectType, GraphQLSchema, GraphQLString} from 'graphql';
import { getUser } from './resolver';

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        location: {type: GraphQLString}
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLInt}},
            // resolve(paramValue, args) {
            //     return users.find(user => user.id === args.id);
            // }
            resolve: getUser
        }
    }
});

export const schema = new GraphQLSchema({
    query: RootQuery
})