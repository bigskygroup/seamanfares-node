const { buildSchema } = require("graphql")


module.exports = buildSchema(`	
		type IP {
			id: ID!
			ip: String!
			latitude: String!	
			longitude: String!	
			city: String!	
			city2: String!	
			country: String!	
			error: String	
		}
		type Logs {
			logs : [String]!
		}
		type User {
			email: String!
			password: String
			access: String!
			comment: String
			createdAt: Int 
			updatedAt: Int
		}
		
		type RootQuery {
		ip(ip: String! , refetch: Boolean!) : IP!
		printConsole(count: Int) : Logs!
		printErrors(count: Int) : Logs!
		printLogs(count: Int, month: Int, day: Int, year: Int) : Logs!
		# printLogsDates will return an array of strings in json format
		printLogsDates(count: Int) : Logs!
		}
				
		schema {
			query: RootQuery
		}
		`)