import { Button } from "@/components/ui/button";
import { useState } from "react";
import { H } from "vitest/dist/reporters-5f784f42.js"
import FileDrop from "../component/filedrop";

export default function Ex_Dropzone() {
	const [file, setFile] = useState<File | undefined>();
	const [state, setState] = useState('ready')
	const [preview, setPreview] = useState<ArrayBuffer | string>();
	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		if (typeof file === 'undefined') return;
		const formData = new FormData();
		formData.append("file", file!);

		console.log(file)
	}
	const handleOnChange = (event: React.FormEvent<HTMLElement>) => {
		const target = event.target as HTMLInputElement & {
			files: FileList; //multiple files
		}
		setFile(target.files[0]);

		const file = new FileReader;
		file.onload = (e) => {
			if (file.result === null) return
			setPreview(file.result)
		}
		file.readAsDataURL(target.files[0]);
	}


	return (
		<div>
			<form>
				<input name="image" type="file" onChange={handleOnChange} />
				<Button type="submit" >upload</Button>
			</form>
			<img src={preview ? String(preview) : "none.jpg"} />

			<div>
			</div>
		</div>
	)
}
