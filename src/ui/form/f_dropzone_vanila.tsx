"use client"
import React, { useEffect, useState } from 'react';
import Dropzone, { DropzoneFile } from 'dropzone';
import 'dropzone/dist/dropzone.css';

Dropzone.autoDiscover = false;


const F_dropzone_vanilla: React.FC = () => {
	const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

	useEffect(() => {
		const myDropzone = new Dropzone('#my-form', {
			url: '/your-upload-endpoint',
			renameFile: (file: DropzoneFile) => {
				const encodedName = encodeURIComponent(file.name);
				return `${Date.now()}_${encodedName}`;
			},
			autoProcessQueue: false, // Disable auto processing of files
		});

		myDropzone.on('addedfile', (file: DropzoneFile) => {
			console.log(`File added: ${file.name}`);
			setUploadedFileName(file.name);
		});

		// Additional event listeners and configurations can be added here

		// Clean up Dropzone instance on component unmount
		return () => {
			myDropzone.destroy();
		};
	}, []);

	const handleUpload = () => {
		const myDropzone = Dropzone.forElement('#my-form');

		if (myDropzone.files.length > 0) {
			const currentFile = myDropzone.files[0];
			console.log(`Uploading file: ${currentFile.name}`);

			// Manually process the files
			myDropzone.processQueue();
		} else {
			console.log('No files to upload.');
		}
	};

	return (
		<div>
			<form id="my-form" className="dropzone">
				{/* Additional Dropzone configuration can be added here */}
			</form>
			{uploadedFileName && <p>Uploaded File: {uploadedFileName}</p>}
			<button onClick={handleUpload}>Submit</button>
		</div>
	);
};

export default F_dropzone_vanilla;

