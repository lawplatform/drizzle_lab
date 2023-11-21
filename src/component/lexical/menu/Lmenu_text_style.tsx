import Bi from "@/src/ui/button/bi";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND, TextFormatType } from 'lexical';
import { Type } from "lucide-react";


export default function Lmenu_text_style() {
	const [editor] = useLexicalComposerContext();

	const handleOnClick = (formatType: TextFormatType) => {
		editor.dispatchCommand(FORMAT_TEXT_COMMAND, formatType)
	}

	return (
		<div style={{ marginTop: '10px' }}>
			<span style={{ fontWeight: 'bold' }}>Text actions</span>
			<div>
				{[
					'nanmum',
					'Bold',
					'Italic',
					'Underline',
					'Code',
					'Highlight',
					'Strikethrough',
					'Subscript',
					'Superscript'
				].map(value => {
					return (
						<>
							<Bi action={() => handleOnClick(value.toLowerCase() as TextFormatType)}><Type /></Bi>
						</>
					)
				})}
			</div>
		</div>
	);
}


