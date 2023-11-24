import { Vector3, Animation } from "@babylonjs/core"

export function getSlideUpAnimation(position: Vector3, offsetY: number) {
	const { y } = position
	const keys = [
		{
			frame: 0,
			value: y + offsetY,
		},
		{
			frame: 60,
			value: y,
		},
		{
			frame: 120,
			value: y + offsetY,
		},
	]

	const animation = new Animation('animation', 'position.y', 60, 0, 1)
	animation.setKeys(keys)

	return [animation]
}
