import { Upload, X } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { useDropzone, DropzoneRootProps, DropzoneInputProps } from 'react-dropzone';

interface RejectedFile {
	file: File;
	errors: any[];
}


const F_Dropzone: React.FC<{ className: string }> = ({ className }) => {
	const [files, setFiles] = useState<Array<File & { preview: string }>>([]);
	const [rejected, setRejected] = useState<Array<{ file: File; errors: any[] }>>([]);

	const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: RejectedFile[]) => {
		if (acceptedFiles?.length) {
			setFiles((previousFiles) => [
				...previousFiles,
				...acceptedFiles.map((file) =>
					Object.assign(file, { preview: URL.createObjectURL(file) })
				),
			]);
		}

		if (rejectedFiles?.length) {
			setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
		}
	}, []);

	const { getRootProps, getInputProps, isDragActive }: {
		getRootProps: (props?: DropzoneRootProps) => DropzoneRootProps;
		getInputProps: (props?: DropzoneInputProps) => DropzoneInputProps;
		isDragActive: boolean;
	} = useDropzone({
		accept: {
			'image/*': [],
		},
		maxSize: 1024 * 1000,
		onDrop,
	});

	useEffect(() => {
		// Revoke the data uris to avoid memory leaks
		return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
	}, [files]);

	const removeFile = (name: string) => {
		setFiles((currentFiles) => currentFiles.filter((file) => file.name !== name));
	};

	const removeAll = () => {
		setFiles([]);
		setRejected([]);
	};

	const removeRejected = (name: string) => {
		setRejected((currentFiles) => currentFiles.filter(({ file }) => file.name !== name));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!files?.length) return;

		const formData = new FormData();
		files.forEach((file) => formData.append('file', file));
		formData.append('upload_preset', 'friendsbook');

		const cloudinaryURL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
		const data = "send data"

		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div
				{...getRootProps({
					className: className,
				})}
			>
				<input {...getInputProps()} />
				<div className='flex flex-col items-center justify-center gap-4'>
					<Upload className='h-5 w-5 fill-current' />
					{isDragActive ? (
						<p>Drop the files here ...</p>
					) : (
						<p>Drag & drop files here, or click to select files</p>
					)}
				</div>
			</div>

			{/* Preview */}
			<section className='mt-10'>
				<div className='flex gap-4'>
					<h2 className='title text-3xl font-semibold'>Preview</h2>
					<button
						type='button'
						onClick={removeAll}
						className='border-secondary-400 hover:bg-secondary-400 mt-1 rounded-md border px-3 text-[12px] font-bold uppercase tracking-wider text-neutral-500 transition-colors hover:text-white'
					>
						Remove all files
					</button>
					<button
						type='submit'
						className='ml-auto mt-1 rounded-md border border-purple-400 px-3 text-[12px] font-bold uppercase tracking-wider text-neutral-500 transition-colors hover:bg-purple-400 hover:text-white'
					>
						Upload to Cloudinary
					</button>
				</div>

				{/* Accepted files */}
				<h3 className='title mt-10 border-b pb-3 text-lg font-semibold text-neutral-600'>
					Accepted Files
				</h3>
				<ul className='mt-6 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
					{files.map((file) => (
						<li key={file.name} className='relative h-32 rounded-md shadow-lg'>
							<Image
								src={file.preview}
								alt={file.name}
								width={100}
								height={100}
								onLoad={() => {
									URL.revokeObjectURL(file.preview);
								}}
								className='h-full w-full rounded-md object-contain'
							/>
							<button
								type='button'
								className='border-secondary-400 bg-secondary-400 absolute -right-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full border transition-colors hover:bg-white'
								onClick={() => removeFile(file.name)}
							>
								<X className='hover:fill-secondary-400 h-5 w-5 fill-white transition-colors' />
							</button>
							<p className='mt-2 text-[12px] font-medium text-neutral-500'>
								{file.name}
							</p>
						</li>
					))}
				</ul>

				{/* Rejected Files */}
				<h3 className='title mt-24 border-b pb-3 text-lg font-semibold text-neutral-600'>
					Rejected Files
				</h3>
				<ul className='mt-6 flex flex-col'>
					{rejected.map(({ file, errors }) => (
						<li key={file.name} className='flex items-start justify-between'>
							<div>
								<p className='mt-2 text-sm font-medium text-neutral-500'>
									{file.name}
								</p>
								<ul className='text-[12px] text-red-400'>
									{errors.map((error) => (
										<li key={error.code}>{error.message}</li>
									))}
								</ul>
							</div>
							<button
								type='button'
								className='border-secondary-400 hover:bg-secondary-400 mt-1 rounded-md border px-3 py-1 text-[12px] font-bold uppercase tracking-wider text-neutral-500 transition-colors hover:text-white'
								onClick={() => removeRejected(file.name)}
							>
								remove
							</button>
						</li>
					))}
				</ul>
			</section>
		</form>
	);
};

export default F_Dropzone;

