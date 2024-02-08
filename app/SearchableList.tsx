"use client"

import { SearchBox } from "./SearchBox"
import { AssetsList } from "./AssetsList"
import type { Asset, AssetDisplay } from "./useFetchAssets"
import { useState } from "react"
import { ChangeEvent } from "react"

type SearchableListProps = {
	assets: AssetDisplay[]
}

export function SearchableList({ assets }: SearchableListProps) {
	const [inputValue, setInputValue] = useState("")

	const filteredAssets = assets.filter(asset => asset.name.toLowerCase().includes(inputValue.toLowerCase()))

	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		setInputValue(event.target.value)
	}

	return (
		<div className="searchable-list">
			<SearchBox
				value={inputValue}
				onInputChange={handleInputChange}
			/>
			<AssetsList filteredAssets={filteredAssets} />
		</div>
	)
}
