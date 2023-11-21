"use client"
import { $getRoot, $getSelection } from 'lexical';
import { useEffect, useState } from 'react';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import "./lexical.css"
const myTheme = {
	ltr: 'ltr',
	rtl: 'rtl',
	paragraph: 'editor-paragraph',
}

function MyCustomAutoFocusPlugin() {
	const [editor] = useLexicalComposerContext();
	useEffect(() => {
		// Focus the editor when the effect fires!
		editor.focus();
	}, [editor]);
	return null;
}

function onError(error: any) {
	console.error(error);
}


interface OnChangePluginProps {
	onChange: (editorState: any) => void; // Replace 'any' with the actual type of editorState
}



export default function Editor_Lexical() {
	const initialConfig = {
		namespace: 'MyEditor',
		theme: myTheme,
		onError,
	};
	const [editorState, setEditorState] = useState<any>();
	function onChange(editorState: any) {

		//json conversion
		const editorStateJSON = editorState.toJSON();
		console.log(editorStateJSON);

		setEditorState(editorStateJSON);


	}

	return (
		<LexicalComposer initialConfig={initialConfig}>
			<PlainTextPlugin
				contentEditable={<ContentEditable />}
				placeholder={<div>Enter some text...</div>}
				ErrorBoundary={LexicalErrorBoundary}
			/>
			<HistoryPlugin />
			<MyCustomAutoFocusPlugin />
			<OnChangePlugin onChange={onChange} />
		</LexicalComposer>
	);
}
