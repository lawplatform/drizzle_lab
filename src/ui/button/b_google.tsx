type BtnProps = {
	onClickHandler: () => void;
};

export default function B_google({ onClickHandler }: BtnProps) {
	const click = () => {
		console.log("btn clcked");

		onClickHandler();
	}
	return (
		<>
			<button onClick={click}
				className="flex gap-2 rounded-lg border border-slate-200 px-4 py-2 text-slate-700 transition duration-150 hover:border-slate-400 hover:text-slate-900 hover:shadow dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-slate-300">
				<img className="h-6 w-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
				<span>Login with Google</span>
			</button>
		</>
	)
}
