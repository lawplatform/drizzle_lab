import { Color3 } from "@babylonjs/core/Maths/math.color";

export const hexToColor3 = (hex: string): Color3 => {
	// Remove the '#' character if it exists
	const cleanedHex = hex.startsWith("#") ? hex.slice(1) : hex;

	// Convert hex to RGB
	const bigint = parseInt(cleanedHex, 16);
	const r = (bigint >> 16) & 255;
	const g = (bigint >> 8) & 255;
	const b = bigint & 255;

	// Normalize RGB values to the range [0, 1]
	const color3 = new Color3(r / 255, g / 255, b / 255);

	return color3;
};

