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
		type Logs {
			logs : [String]!
		}
		
		type RootQuery {
		ip(ip: String! , refetch: Boolean!) : IP!
		printConsole(count: Int) : Console!
		printErrors(count: Int) : Error!
		printLogs(count: Int, month: Int, day: Int, year: Int) : Logs!
		# printLogsDates will return an array of strings in json format
		printLogsDates(count: Int) : Logs!
		}
				
		schema {
			query: RootQuery
		}
		`)