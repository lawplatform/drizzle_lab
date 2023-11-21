"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { AlignJustify } from "lucide-react";
import { useTheme } from "next-themes";
import Divider_h from "../Divider_h";
import { B_ThemeToggler } from "../B_ThemeToggler";
import Logo from "../Logo";
const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

export default function Navbar() {
	const { setTheme } = useTheme();
	const [lightMode, setLightMode] = useState(true);
	const [logoColor, setLogoColor] = useState("#6064d4")
	const themeChange = () => {
		if (lightMode) {
			setTheme("dark");
			setLogoColor("#FFFFFF")
		} else {
			setTheme("light");
			setLogoColor("#6064d4")
		}
		setLightMode(!lightMode);
	};
	return (
		<NavigationMenu className=" mx-auto flex max-w-6xl justify-between">
			<div>
				<Logo color={logoColor}></Logo>
			</div>
			<NavigationMenuList>
				<NavigationMenuItem className="hidden">
					<NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<ListItem href="/docs/primitives/typography" title="Typography">
								Styles for headings, paragraphs, lists...etc!
							</ListItem>
							<ListItem href="/docs/primitives/typography" title="Typography">
								Styles for headings, paragraphs, lists...etc
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Sheet>
						<SheetTrigger asChild>
							<div style={{ color: "#6064d4" }}>
								<AlignJustify className="mx-5 w-5 dark:text-white sm:hidden" />
							</div>
						</SheetTrigger>
						<SheetContent side={"left"}>
							<SheetHeader>
								<SheetTitle className="text-start">로그인</SheetTitle>
								<SheetDescription>새로운 서비스를 즐겨보세요</SheetDescription>
							</SheetHeader>
							<div className="grid gap-4 py-4">
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="name" className="text-right">
										Name
									</Label>
									<Input
										id="name"
										value="Pedro Duarte"
										className="col-span-3"
									/>
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="username" className="text-right">
										Username
									</Label>
									<Input
										id="username"
										value="@peduarte"
										className="col-span-3"
									/>
								</div>
							</div>
							<div> this is other </div>
							<Divider_h />
							<div>
								<SheetHeader>
									<SheetTitle className="text-start">테마</SheetTitle>
									<SheetDescription>
										<B_ThemeToggler isTrue={lightMode} clickEvt={themeChange} />
									</SheetDescription>
								</SheetHeader>
							</div>
							<SheetFooter>
								<SheetClose asChild>
									<Button type="submit">Save changes</Button>
								</SheetClose>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
