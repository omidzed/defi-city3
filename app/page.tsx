import React from "react"
import Image from "next/image"
import { useAssets } from "./AssetsContext"
import { SearchableList } from "./SearchableList"

export default function Page() {
	const { assets, loading, error } = useAssets() // Consume the context

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error}</div>

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-10">
			<div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
				<Image
					src="/defi.png"
					alt="Defi Logo" // Updated alt text for accuracy
					width={100}
					height={24}
					priority
				/>
			</div>
			<div className="w-48 h-12 bg-white rounded-md"></div>
			<SearchableList assets={assets} /> {/* Pass asset names */}
		</main>
	)
}
