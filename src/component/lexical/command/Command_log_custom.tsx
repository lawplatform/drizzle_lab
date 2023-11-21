import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { createCommand, COMMAND_PRIORITY_NORMAL } from "lexical";

const DO_SOMETHING_AWESOME = createCommand("create_banner");


export const Command_log_custom = () => {
	const [editor] = useLexicalComposerContext();

	editor.registerCommand(
		DO_SOMETHING_AWESOME,
		() => {
			console.log('This is my own command')
			return true;
		},
		COMMAND_PRIORITY_NORMAL,
	);

	return (
		<>
			<button onClick={() => editor.dispatchCommand(DO_SOMETHING_AWESOME, undefined)}>do Something</button>
		</>
	)
};


