import { ArcRotateCamera, Color4, Vector3 } from '@babylonjs/core'




export default function CAMERA_isometric() {
	return (
		<ArcRotateCamera
			radius={4}
			alpha={Math.PI / 4} // Slightly rotate around the Y-axis
			beta={Math.PI / 6} // Slightly rotate above the XZ plane
			target={Vector3.Zero()}
			lowerRadiusLimit={10}
			upperRadiusLimit={10}
			lowerBetaLimit={Math.PI / 5} // Fixed angle above the XZ plane
			upperBetaLimit={Math.PI / 5 + 0.5}
			lowerAlphaLimit={Math.PI / 4 - 0.1} // Adjust the lower limit for XZ rotation
			upperAlphaLimit={Math.PI / 4 + 0.1} // Adjust the upper limit for XZ rotation
		/>
	)
}
