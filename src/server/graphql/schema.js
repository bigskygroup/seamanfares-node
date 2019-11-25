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
		type Console {
			logs : [String]!
		}
		type Error {
			logs : [String]!
		}
		
		type RootQuery {
		ip(ip: String! , refetch: Boolean!) : IP!
		printConsole(mode: Int) : Console!
		printErrors(mode: Int) : Error!
		}
				
		schema {
			query: RootQuery
		}
		`)