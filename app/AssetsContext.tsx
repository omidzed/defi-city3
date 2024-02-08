"use client"

import React, { createContext, useContext, ReactNode } from "react"
import useFetchAssets from "./useFetchAssets"
import type { AssetDisplay } from "./useFetchAssets" // Ensure you import AssetDisplay if that's what you intend to use

type AssetsContextType = {
	assets: AssetDisplay[]
	loading: boolean
	error: string | null
}

export const AssetsContext = createContext<AssetsContextType>({
	assets: [],
	loading: true,
	error: null,
})

interface AssetsProviderProps {
	children: ReactNode
}

export const AssetsProvider: React.FC<AssetsProviderProps> = ({ children }) => {
	const { assets, loading, error } = useFetchAssets()

	return <AssetsContext.Provider value={{ assets, loading, error }}>{children}</AssetsContext.Provider>
}

export const useAssets = () => useContext(AssetsContext)
