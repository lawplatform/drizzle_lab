"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quill.css'
import Head from 'next/head';
const modules = {
	toolbar: [
		[{
			font: [
				'monospace',
				'serif',
				'Noto',
				'Nanum',

			]
		}],
		[{ size: ["small", false, "large", "huge"] }], // custom dropdown
		[{ header: [1, 2, 3, 4, 5, 6, false] }],
		[{ color: [] }, { background: [] }], // dropdown with defaults from theme
		["bold", "italic", "underline", "strike", "blockquote"],
		[
			{ list: "ordered" },
			{ list: "bullet" },
			{ indent: "-1" },
			{ indent: "+1" },
		],
		["link", "image"],
		["clean"],
	],
	imageResize: {
		parchment: Quill.import('parchment'),
		modules: ['Resize', 'DisplaySize'],
	},
};

const formats = [
	"font",
	"size",
	"header",
	"color",
	"background",
	"bold",
	"italic",
	"underline",
	"strike",
	"blockquote",
	"list",
	"bullet",
	"indent",
	"link",
	"image",
];







export default function Quill_basic() {
	const [value, setValue] = useState('');
	function submit(e: any) {
		e.preventDefault();
		console.log(value);
	}

	// onChange expects a function with these 4 arguments
	function handleChange(content, delta, source, editor) {
		setValue(editor.getContents());
	}


	return (

		<div className='flex flex-col'>
			<Head>
				<link href="
https://cdn.jsdelivr.net/npm/noto-sans-kr@0.1.1/styles.min.css
" rel="stylesheet" />
				<title>My page title</title>
			</Head>
			<div className='notofont'>안녕하세요 </div>
			<div className='nanumfont'>안녕하세요 </div>
			<div className='nanumpenscript'>안녕 하세요</div>
			<div className='mx-auto h-screen w-2/3 '>
				<ReactQuill
					style={{ height: "600px", margin: "2px" }}
					theme="snow"
					value={value}
					modules={modules}
					formats={formats}
					onChange={handleChange}
					placeholder="내용을 입력하시오"
				/>
			</div>
			<Button onClick={submit} className='w-full'> 저장하기 </Button>
		</div>
	)

		;

}
