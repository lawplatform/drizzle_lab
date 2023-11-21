import { useCallback, useState } from 'react'
import Dropzone, { useDropzone } from 'react-dropzone'
export default function FileDrop() {
	const [preview, setPreview] = useState<String | ArrayBuffer | null>();
	const onDrop = useCallback((acceptedFiles: any) => {


		const file = new FileReader;
		file.onload = (e) => {
			if (file.result === null) { return }
			setPreview(file.result)
		}


		file.readAsDataURL(acceptedFiles[0]);
	}, [])
	return (
		<>
			<Dropzone onDrop={acceptedFiles => onDrop(acceptedFiles)}>
				{({ getRootProps, getInputProps }) => (
					<section>
						<div {...getRootProps()}>
							<input {...getInputProps()} />
							<p>Drag 'n' drop some files here, or click to select files</p>
						</div>
					</section>
				)}
			</Dropzone>
			<img src={preview ? String(preview) : "none.jpg"} />
		</>
	)
}
