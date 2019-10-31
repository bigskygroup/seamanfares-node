const { buildSchema } = require("graphql")


module.exports = buildSchema(`
		
		type IP {
			ip: String!
			latitude: String!	
			longitude: String!	
			city: String!	
			city2: String!	
			country: String!	
			error: String	
		}
		
		type RootQuery {
		ip(ip: String! , refetch: Boolean!) : IP!
		}

		
		schema {
			query: RootQuery
		}
		`)