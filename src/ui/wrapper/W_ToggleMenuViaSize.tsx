'use client'
import { useEffect, useState } from "react";

interface ToggleMenuViaSizeProps {
	msg: String
}
const ToggleMenuViaSize: React.FC<ToggleMenuViaSizeProps> = ({ msg }) => {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 640);
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);



	return (<div>
		{isMobile ? (
			<div> this is mobiel</div>
		) : (
			<div> this is wide</div>
		)}
	</div>
	);
}
export default ToggleMenuViaSize;
