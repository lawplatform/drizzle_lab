import { Product } from '@/payload-types'
import { create } from 'zustand'
import {
	createJSONStorage,
	persist,
} from 'zustand/middleware'
import { configureObservablePersistence } from '@legendapp/state/persist'
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage'
import { enableReactComponents } from "@legendapp/state/config/enableReactComponents"
import { observable } from '@legendapp/state'


export type CartItem = {
	product: Product
}

type CartState = {
	items: CartItem[]
	addItem: (product: Product) => void
	removeItem: (productId: string) => void
	clearCart: () => void
}
enableReactComponents()
configureObservablePersistence({
	pluginLocal: ObservablePersistLocalStorage
})

export const State = observable({

})


export const useCart = create<CartState>()(
	persist(
		(set) => ({
			items: [],
			addItem: (product) =>
				set((state) => {
					return { items: [...state.items, { product }] }
				}),
			removeItem: (id) =>
				set((state) => ({
					items: state.items.filter(
						(item) => item.product.id !== id
					),
				})),
			clearCart: () => set({ items: [] }),
		}),
		{
			name: 'cart-storage',
			storage: createJSONStorage(() => localStorage),
		}
	)
)
