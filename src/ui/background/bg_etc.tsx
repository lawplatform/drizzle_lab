import './background.css'
function PinkGradient() {
	return (
		<div className="h-14 bg-gradient-to-r from-purple-500 to-pink-500"></div>
	);
}


function TiltSquare() {
	return (
		<div className="diagonal h-20 w-full">
			<div className=""> This is new tilt  window and.. it not apply the css</div>
		</div>

	)
}

export { PinkGradient, TiltSquare }
