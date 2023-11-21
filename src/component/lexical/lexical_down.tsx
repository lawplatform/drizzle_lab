"use client"
import React, { useMemo } from 'react';
import { InitialConfigType, LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { Action_History } from './menu/Action_History';
import { Menu_Do_Something } from './command/command_sayHi';
import { Plug_OnChange } from './plugin/plugin_OnChangePlugin';
import { Command_log_custom } from './command/Command_log_custom';
import Lmenu_text_style from './menu/Lmenu_text_style';
import "./lexical_custom.css"

export const Lexical_down: React.FC = () => {
	const CustomContent = useMemo(() => {
		return (
			<ContentEditable style={{
				position: 'relative',
				borderColor: 'rgba(255,211,2,0.68)',
				border: '2px solid green',
				borderRadius: '5px',
				maxWidth: '100%',
				padding: '10px'
			}} />
		)
	}, []);

	const CustomPlaceholder = useMemo(() => {
		return (
			<div style={{
				position: 'absolute', top: 30, left: 30,
			}}>
				Enter some text...
			</div>
		)
	}, []);

	const lexicalConfig: InitialConfigType = {
		namespace: 'My Rich Text Editor',
		theme: {
			text: {
				bold: "nanumpenscript",
			}
		},
		onError: (e) => {
			console.log('ERROR:', e)
		}
	}


	return (
		<div style={{ padding: '20px' }}>
			<LexicalComposer initialConfig={lexicalConfig}>
				<Action_History />
				<Command_log_custom />
				<Plug_OnChange />
				<RichTextPlugin
					contentEditable={CustomContent}
					placeholder={CustomPlaceholder}
					ErrorBoundary={LexicalErrorBoundary}
				/>
				<HistoryPlugin />
				<Lmenu_text_style />

			</LexicalComposer>
		</div>
	);
}
