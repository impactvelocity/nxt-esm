import * as React from "react"

function MyComponent({ useState, confetti }) {
	const [count, setCount] = useState(0)

	return (
		<>
			<div>
				<button
					onClick={() => setCount((count) => count + 1)}
					className="bg-blue-400"
				>
					Counter Dynamic Component is {count}
				</button>

				<button onClick={() => confetti()} className="bg-green-400">
					Also Do Confetti
				</button>
			</div>
		</>
	)
}

export default MyComponent
