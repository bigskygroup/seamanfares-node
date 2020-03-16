document.querySelectorAll("*").forEach(item => {
	const href = item.getAttribute("href")
	const src = item.getAttribute("src")
	if (href && /^\//.test(href)) item.setAttribute("href", "https://www.sky-tours.com" + href)
	if (src && /^\//.test(src)) item.setAttribute("src", "https://www.sky-tours.com" + src)
})