
import React, { ReactNode } from 'react';

// Define types for components and props
interface Layout_row_title_desrcriptionProps {
	children: ReactNode[];
}

export default function Layout_row_title_desrcription({ children }: Layout_row_title_desrcriptionProps): JSX.Element {
	return (
		<div className='grid grid-cols-1 items-center  gap-1 sm:grid-cols-2'>
			<div className="mx-auto  w-full justify-center ">
				{children[0]}
			</div>
			<div className="w-full  " >
				{children[1]}
			</div>
		</div>
	);
}
