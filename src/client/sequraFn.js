module.exports = `
			(function(i, s, o, g, r, a, m) {
			    i["SequraConfiguration"] = g
			    i["SequraOnLoad"] = []
			    i[r] = {}
			    i[r][a] = function(callback) {
			        i["SequraOnLoad"].push(callback)
			    }
			    ;(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
			    a.async = true
			    a.src = g.scriptUri
			    m.parentNode.insertBefore(a, m)
			})(window, document, "script", sequraConfigParams, "Sequra", "onLoad")

			Sequra.onLoad(function() {
			    Sequra.refreshComponents()
			})

`