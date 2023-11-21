import dynamic from 'next/dynamic';
import Quill_basic from './Quill_basic';

const Editor = dynamic(() => import('./Quill_basic'), {
	ssr: false,
});
export default function Dynamic_wrapper() {
	return (
		< Editor />
	)
}
