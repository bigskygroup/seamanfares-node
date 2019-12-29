const rtlLangs = ["ae", "eg", "ir", "jo", "lb", "sa", "bh", "kw", "om", "qr"]

// applies a style to all the children of the target
function changeElementStyle(target) {
	// target a css string to look up
	var element = Array.from(document.querySelectorAll(target)).concat(
		Array.from(document.querySelectorAll(target + " * "))
	)
	if (element.length === 0)
		return function() {
			return false
		}
	return function(newStyle = {}, exception = []) {
		// newStyle is an css styling object
		// exception is the DOM element that will be exempted from applying the newStyle
		// exception must be sent as an array coming from document.querySelectorAll() method
		if (newStyle === "rtl") {
			newStyle = { textAlign: "right", direction: "rtl" }
		}
		const stylingArray = Object.entries(newStyle)

		element.forEach(item => {
			if (!Array.from(exception).includes(item)) {
				stylingArray.forEach(s => applyStyle(item, s))
			}
		})
	}
}

function applyStyle(element, array) {
	element.style[array[0]] = array[1]
	return true
}

// example:
//changeElementStyle("*")({color: "red"}, document.querySelectorAll("p.font14"))

var sequraConfigParams = {
	merchant: "skytours",
	assetKey: "4DQVaeeb6T",
	products: ["pp3", "pp5"], // List of SeQura products that you want to include components.
	scriptUri: "https://sandbox.sequracdn.com/assets/sequra-checkout.min.js", // SeQura Javascript library uri for production or sandbox (see the documentation for live url)
	decimalSeparator: ",", // Decimal separator used in currencies formatting. Optional, default `,`.
	thousandSeparator: ".", // Thousand separator used in currencies formatting. Optional, default `.`.
	rebranding: true
}

