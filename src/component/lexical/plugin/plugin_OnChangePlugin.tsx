
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";
//detect state change and show console 

//get current state
//editor.getRootElement()?.textContent
//get text only
//editor.getRootElement()
//
//get curent state as <Json>
//
//const editorState = editor.getEditorState();
//const json = editorState.toJSON();

export const Plug_OnChange = () => {
	const [editor] = useLexicalComposerContext();
	useEffect(() => {
		return editor.registerUpdateListener((listener) => {
			const editorState = editor.getEditorState();





		});
	}, [editor]);

	return null;
}
