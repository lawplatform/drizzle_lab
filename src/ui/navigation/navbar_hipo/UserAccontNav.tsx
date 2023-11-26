'use client'

import { User } from '@/payload-types'
'
import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const UserAccountNav = ({ user }: { user: User }) => {
	const { signOut } = useAuth()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				asChild
				className='overflow-visible'>
				<Button
					variant='ghost'
					size='sm'
					className='relative'>
					My account
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent
				className='w-60 bg-white'
				align='end'>
				<div className='flex items-center justify-start gap-2 p-2'>
					<div className='flex flex-col space-y-0.5 leading-none'>
						<p className='text-sm font-medium text-black'>
							{user.email}
						</p>
					</div>
				</div>

				<DropdownMenuSeparator />

				<DropdownMenuItem asChild>
					<Link href='/sell'>Seller Dashboard</Link>
				</DropdownMenuItem>

				<DropdownMenuItem
					onClick={signOut}
					className='cursor-pointer'>
					Log out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default UserAccountNav
