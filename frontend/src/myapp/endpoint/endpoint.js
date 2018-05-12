import ApolloClient from "apollo-boost"

const client = new ApolloClient({ uri: "https://us1.prisma.sh/public-redsalmon-519/backend/dev" })

export { client }