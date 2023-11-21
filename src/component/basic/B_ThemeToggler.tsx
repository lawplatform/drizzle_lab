"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { ReactNode, useState } from "react"
import { Switch } from "@/components/ui/switch"

interface B_ThemeTogglerProps {
	isTrue: boolean;
	clickEvt: () => void;
}

export function B_ThemeToggler({ isTrue, clickEvt }: B_ThemeTogglerProps) {
	return (
		<div className="my-3 flex flex-row justify-between ">
			<p >
				{isTrue ? <Sun /> : <Moon />}
			</p>
			<Switch id="light-mode" onCheckedChange={clickEvt} className="mx-1" />
		</div>
	)
}

