import Image from "next/image"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

import confetti from "https://esm.sh/canvas-confetti@1.6.0"

import { sayHi } from "https://cdn.jsdelivr.net/gh/impactvelocity/nxt-esm/src/_3pl/sayHi.js"
// import { esm } from "https://esm.sh/build"

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
		>
			<div className="">
				Confetti
				<div className="">
					<button
						onClick={() => {
							confetti()
							console.log(sayHi())
						}}
						className=""
					>
						Confetti ESM
					</button>
				</div>
			</div>
		</main>
	)
}
