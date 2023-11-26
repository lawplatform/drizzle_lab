"use client"
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Dropzone, { DropzoneInputProps, DropzoneRootProps, useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Upload, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import supabase from '@/server/supabase';


type FormInputs = {
	file: FileList;
};




export default function F_fileInput_drop() {
	const form = useForm<FormInputs>();

	const onSubmit: SubmitHandler<FormInputs> = (data) => {
		uploadFile(files, "kim", "type");
	};


	const [files, setFiles] = useState<Array<File & { preview: string, id: string }>>([]);


	useEffect(() => {
		// Revoke the data uris to avoid memory leaks
		return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
	}, [files]);

	const removeFile = (index: number) => {
		//setFiles((currentFiles) => currentFiles.filter((file) => file.id !== id));
		setFiles((currentFiles) => currentFiles.filter((_, i) => i !== index));
	};

	const removeAll = () => {
		setFiles([]);
	};

	return (
		<div>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<Controller
					control={form.control}
					name="file"
					rules={{
						required: { value: true, message: 'This field is required' },
					}}
					render={({ field: { onChange, onBlur }, fieldState }) => (
						<Dropzone
							noClick
							onDrop={(acceptedFiles) => {
								form.setValue('file', acceptedFiles as unknown as FileList, {
									shouldValidate: true,
								});

								if (acceptedFiles?.length) {
									setFiles((previousFiles) => [
										...previousFiles,
										...acceptedFiles.map((file) =>
											Object.assign(file, {
												preview: URL.createObjectURL(file),
												id: generateUniqueId(),
											})
										),
									]);
								}

							}}
						>
							{({
								getRootProps,
								getInputProps,
								open,
								isDragActive,
								acceptedFiles,
							}) => (
								<div>
									<div className='w-full bg-red-100'

										{...getRootProps()}
									>
										<div
											className="flex h-32 w-full cursor-pointer appearance-none justify-center rounded-md border-2 border-dashed border-gray-300 bg-white px-4 transition hover:border-gray-400 focus:outline-none" >
											<span className="flex items-center space-x-2">
												<Upload className='h-10 w-10' />
												<span className="font-medium text-gray-600">
													파일을 드래그 하거나 <button type="button" onClick={open}>업로드
													</button>하세요
												</span>
												<br />

											</span>

											<input
												{...getInputProps({
													id: 'spreadsheet',
													onChange,
													onBlur,
												})}
											/>
											<div>
												{fieldState.error && (
													<span role="alert">{fieldState.error.message}</span>
												)}
											</div>
										</div>
									</div>
								</div>
							)}
						</Dropzone>
					)}
				/>
				<Button type="submit" className='w-full'>업로드</Button>
			</form>
			rst
			<ul className='mt-6 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
				{files.map((file, index) => (
					<li key={index} className='relative h-32 rounded-md shadow-lg'>
						<div className='relative block h-32 rounded-lg object-cover object-center'>
							<Image
								src={file.preview}
								alt={file.name}
								fill={true}
								objectFit="cover"
								onLoad={() => {
									URL.revokeObjectURL(file.preview);
								}}
								className='h-full w-full rounded-md object-contain'
							/>
						</div>
						<button
							type='button'
							className='border-secondary-400 bg-secondary-400 absolute -right-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full border transition-colors hover:bg-white'
							onClick={() => removeFile(index)}
						>
							<X className='hover:fill-secondary-400 h-5 w-5 fill-white transition-colors' />
						</button>
						<p className='mt-2 text-[12px] font-medium text-neutral-500'>
							{file.name}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}


