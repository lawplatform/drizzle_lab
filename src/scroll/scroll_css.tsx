"use client"
import "./scroll_css.css";
export default function Scroll_css() {

	return (
		<div className="wrap">
			<div>{document.documentElement.scrollHeight}</div>
			<section className="sc bg-red-100"> ahi </section>
			<section className="sc bg-blue-100"> hi </section>
			<section className="sc bg-green-100"> ai </section>
			<section className="sc bg-yellow-100"> a </section>


		</div>
	)
}
