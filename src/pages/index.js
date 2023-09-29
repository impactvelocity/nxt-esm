import Image from "next/image"

import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

import { useState } from "react"

import confetti from "https://esm.sh/canvas-confetti@1.6.0"

import { sayHi } from "https://cdn.jsdelivr.net/gh/impactvelocity/nxt-esm/src/_3pl/sayHi2.js"

// import TestComponent from "https://cdn.jsdelivr.net/gh/impactvelocity/nxt-esm/src/_3pl/testComponent2.2.js"

import dynamic from "next/dynamic"

const TestComponent = dynamic(() =>
	import(
		"https://cdn.jsdelivr.net/gh/impactvelocity/nxt-esm/src/_3pl/testComponent2.2.js"
	)
)

export default function Home() {
	console.log(TestComponent)
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

					<div className="mt-12 flex items-center space-x-2">
						<TestComponent
							useState={useState}
							confetti={confetti}
							className="bg-white rounded py-2 px-2 font-bold text-black"
						/>
					</div>
				</div>
			</div>
		</main>
	)
}

export const config = {
	runtime: "experimental-edge", // or "edge"
}

export async function getServerSideProps() {
	// Fetch data from external API

	// Pass data to the page via props
	return { props: { data: "yes" } }
}
