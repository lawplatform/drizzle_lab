import './C_flip_3d.css'
export default function C_Flip_3d() {
	const handleTouch = () => {
		console.log("it touched somethign");
	}
	return (
		<div className="card" onTouchStart={handleTouch} >
			<div className="card__content">

				<div className="card__front">
					<h3 className="card__title"> A </h3>
					<p className="card__subtitle">build something valuable</p>
				</div>

				<div className="card__back">
					<p className="card__body">This would be some longer text that gives a description of the things from the other side I guess</p>
				</div>

			</div>
		</div >
	)
}
