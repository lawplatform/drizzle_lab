"use client"
import { DndContext, closestCenter } from '@dnd-kit/core'
import { Bell } from 'lucide-react'
import { CSS } from '@dnd-kit/utilities'
import { arrayMove, SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable'
import { FC, useState } from 'react'

type dataType = {
	id: string,
	name: string,
	des: string
}

function SortCard({ name, des, id }: dataType) {
	return (

		<div className=" flex items-center space-x-4 rounded-md border p-4">
			<Bell />
			<div className="flex-1 space-y-1">
				<p className="text-sm font-medium leading-none">
					{name}
				</p>
				<p className="text-sm text-muted-foreground">
					{des}
				</p>
			</div>
		</div>
	)
}
//define sortaleb items 
export function SortableItem(props: any) {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition
	} = useSortable({ id: props.id })

	const style = {
		transform: CSS.Transform.toString(transform),
		transition
	}
	return (
		<div ref={setNodeRef} style={style} {...attributes} {...listeners}>
			<SortCard name={props.name} des={props.des} id={props.id} />
		</div>
	)
}

const data: dataType[] = [
	{
		"id": "1",
		"name": "Kimchi",
		"des": "A traditional Korean side dish made from fermented vegetables, usually cabbage or radishes, with chili pepper, garlic, ginger, and other seasonings."
	},
	{
		"id": "2",
		"name": "Bibimbap",
		"des": "A mixed rice dish topped with vegetables, sliced meat (usually beef), a fried egg, and spicy gochujang (red chili paste)."
	},
	{
		"id": "3",
		"name": "Bulgogi",
		"des": "Marinated and grilled beef, typically thinly sliced, known for its sweet and savory flavor. It is often served with rice or wrapped in lettuce leaves."
	}
]

export default function Dndkit() {
	const [items, setItems] = useState(data)
	const handleDragEnd = (event: any) => {
		const { active, over } = event;

		if (active.id !== over.id) {

			setItems((m) => {
				const oldIndex = m.findIndex(item => item.id === active.id);
				const newIndex = m.findIndex(item => item.id === over.id);
				const newItemsArray = arrayMove(items, oldIndex, newIndex);
				return newItemsArray
			})



		}


	}
	return (
		<div>thisis
			<DndContext
				collisionDetection={closestCenter}
				onDragEnd={handleDragEnd}
			>
				<SortableContext items={items} strategy={verticalListSortingStrategy}>

					{items.map((item) => (
						<SortableItem key={item.name} {...item} />))
					}
				</SortableContext>
			</DndContext>

		</div>
	)
}
