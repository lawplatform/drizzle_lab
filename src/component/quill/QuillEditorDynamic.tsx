import dynamic from 'next/dynamic';
import ReactQuill, { ReactQuillProps } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quill.css'
import { useEffect } from 'react';
interface ForwardedQuillComponent extends ReactQuillProps {
	forwardedRef: React.Ref<ReactQuill>;
}

const QuillEditorDynamic = dynamic(
	async () => {

		const { default: RQ } = await import('react-quill');
		var Font = RQ.Quill.import('formats/font');
		Font.whitelist = [
			'Noto',
			'Nanum',
			'Pen'
		];
		RQ.Quill.register(Font, true);

		var Size = RQ.Quill.import('attributors/style/size');
		Size.whitelist = ['10px', '16px', '18px'];
		RQ.Quill.register(Size, true);

		const modules = {
			toolbar: [
				[{
					font: [
						'monospace',
						'Pen',
						'Noto',
						'Nanum',

					]
				}],
				[{ size: ['10px', '16px', '18px'] }],
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


		};
		const formats = [
			"header",
			"font",
			"size",
			"bold",
			"italic",
			"underline",
			"strike",
			"align",
			"blockquote",
			"list",
			"bullet",
			"indent",
			"background",
			"color",
			"link",
			"image",
			"video",
			"width",
		];


		return ({ forwardedRef, ...props }: ForwardedQuillComponent) => (
			<RQ modules={modules} ref={forwardedRef} {...props} format={formats} />
		);
	},
	{
		loading: () => <div>...loading</div>, ssr: false
	},
);


export default QuillEditorDynamic;
