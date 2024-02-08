import type { Asset, AssetDisplay } from "./useFetchAssets"

type AssetsListProps = {
	filteredAssets: AssetDisplay[]
}

export function AssetsList({ filteredAssets }: AssetsListProps) {
	return (
		<>
			{filteredAssets.length === 0 && (
				<p>Your input does not match the search criteria, please try something different!</p>
			)}
			<ul className="quotes-list">
				{filteredAssets.map((asset, index) => (
					<li key={asset.id || index}>{asset.name}</li>
				))}
			</ul>
		</>
	)
}
