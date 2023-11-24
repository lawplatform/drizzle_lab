import { Color3, Color4, Vector3 } from '@babylonjs/core'
import { FC, ReactNode } from 'react';
import { Engine, Scene, Camera, Html } from 'react-babylonjs'
import Sc_scroll from './scroll/sc_scroll';
//basic scene not include camera
const Sc_with_html_pixi: React.FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => (
	<div style={{ flex: 1, display: 'flex bg-transparent' }}>
		<Engine antialias adaptToDeviceRatio canvasId="babylon-canvas" renderOptions={{
			whenVisibleOnly: true,
		}} >
			<Scene
				clearColor={new Color4(0, 0, 0, 0)}>
				<hemisphericLight
					name="light1"
					intensity={1}
					direction={new Vector3(0, 1, 0)}
				/>
				<arcRotateCamera
					radius={4}
					name="camera1"
					alpha={Math.PI / 4}  // Slightly rotate around the Y-axis
					beta={Math.PI / 6}   // Slightly rotate above the XZ plane
					target={Vector3.Zero()}
					lowerRadiusLimit={10}
					upperRadiusLimit={10}
					lowerBetaLimit={Math.PI / 5}  // Fixed angle above the XZ plane
					upperBetaLimit={Math.PI / 5 + 0.5}
					lowerAlphaLimit={Math.PI / 4 - 0.1}  // Adjust the lower limit for XZ rotation
					upperAlphaLimit={Math.PI / 4 + 0.1}  // Adjust the upper limit for XZ rotatio
				/>

				<box name="kim" position={new Vector3(0, 0, 0)}>
					<standardMaterial
						name="mat"
						specularColor={Color3.Black()}
					/>

				</box>

				<Html name="html" center occlude={false}>
					{
						<div
							style={{
								backgroundColor: 'white',
								borderRadius: '5px',
								border: '3px solid red',
								padding: '8px',
								position: "absolute",
								left: `${"30px"}`
							}}
						>
							<Sc_scroll />
						</div>
					}
				</Html>



				{children}
			</Scene>
		</Engine>
	</div >
)


export default Sc_with_html_pixi;
