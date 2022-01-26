import express from 'express';

// const expressGraphQL = require('express-graphql');

import {graphqlHTTP} from 'express-graphql';
import {schema} from './schema';
const app = express();

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}));



app.listen(3000, () => {
    console.log('Port Listening');
});

