const express = require('express')
const mongoose = require('mongoose')
const { ApolloServer, gql } = require('apollo-server-express')
const cors = require('cors')
const { typeDefs } = require('./schema/typeDefs')
const { resolvers } = require('./schema/resolvers')
const app = express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 5000

mongoose.connect(`mongodb+srv://dsonani16411:dsonani16411@cluster1.8ifprx7.mongodb.net/?retryWrites=true&w=majority`,
    { useUnifiedTopology: true, useNewUrlParser: true })
    .then(Res => {
        console.log(">>>>....DATABASE CONNECTED....<<<<")
    }).catch(Err => { console.log(Err) })

const apolloServer = new ApolloServer({
    typeDefs, resolvers
})

app.get('/', (req, res) => {
    res.send(`This is express server. Go to the ulr <href>http://localhost:${PORT}/graphql</href> for graphQL server`)
})

app.listen(PORT, async () => {
    console.log(`Server is listening on PORT ${PORT}`)
    await apolloServer.start()
    apolloServer.applyMiddleware({ app })
})