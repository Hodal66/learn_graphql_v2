const {ApolloServer,gql} = require("apollo-server");

 const port  = 4200;
const typeDefs = gql`
type Query{
    hello:String
}
`

const resolvers = {
    Query:{
        hello:()=>{
            return "Hello Welldone"
        }
    }
}
const server  = new ApolloServer(
{
    typeDefs,
    resolvers
}
);


server.listen(port).then(({url})=>{
    console.log(`Server is running at ${url}`);
})