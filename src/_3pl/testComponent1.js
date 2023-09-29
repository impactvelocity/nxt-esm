import * as React from "react"

function MyComponent({ useState, confetti, className }) {
	const [count, setCount] = useState(0)

	return (
		<>
			<div>
				<button
					onClick={() => setCount((count) => count + 1)}
					className={className}
				>
					Counter Dynamic Component is {count}
				</button>
			</div>

			<div className="">
				<button onClick={() => confetti()} className={className}>
					Also Do Confetti
				</button>
			</div>
		</>
	)
}

export default MyComponent
