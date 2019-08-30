const Component = () => {
	const [count, setCount] = React.useState(0)
	return (
		<div style={{ border: "1px dashed var(--highlight)" }}>
			<h1>I am a beautiful React component</h1>
			<button type="button" className="btn btn-primary" onClick={() => setCount(pre => pre + 1)}>
				Click to increment
			</button>
			<p>Count: {count}</p>
		</div>
	)
}

ReactDOM.hydrate(<Component />, document.getElementById("header"))