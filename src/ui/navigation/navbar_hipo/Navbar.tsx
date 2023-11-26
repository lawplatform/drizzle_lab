import NavItems from './NavItems'
import { cookies } from 'next/headers'
import Layout_max_width_wrapper from '../../layout/layout_max_width_wrapper'
import Link from 'next/link'
import MobileNav from './MobileNav'
import { Icons } from '../../logo/animal'
import UserAccountNav from './UserAccontNav'
import { buttonVariants } from '@/components/ui/button'
import Cart from '../../product/Cart'

const Navbar = async () => {
	const nextCookies = cookies()
	const user = false;

	return (
		<div className='sticky inset-x-0 top-0 z-50 h-16 bg-white'>
			<header className='relative bg-white'>
				<Layout_max_width_wrapper>
					<div className='border-b border-gray-200'>
						<div className='flex h-16 items-center'>
							<MobileNav />

							<div className='ml-4 flex lg:ml-0'>
								<Link href='/'>
									<p>logo will show</p>
								</Link>
							</div>

							<div className='z-50 hidden lg:ml-8 lg:block lg:self-stretch'>
								<NavItems />
							</div>

							<div className='ml-auto flex items-center'>
								<div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
									{user ? null : (
										<Link
											href='/sign-in'
											className={buttonVariants({
												variant: 'ghost',
											})}>
											Sign in
										</Link>
									)}

									{user ? null : (
										<span
											className='h-6 w-px bg-gray-200'
											aria-hidden='true'
										/>
									)}

									{user ? (
										//<UserAccountNav user={user} />
										<p>user Account</p>
									) : (
										<Link
											href='/sign-up'
											className={
												buttonVariants({
													variant: 'secondary',
												})
											}>
											가입하기
										</Link>
									)}

									{user ? (
										<span
											className='h-6 w-px bg-gray-200'
											aria-hidden='true'
										/>
									) : null}

									{user ? null : (
										<div className='flex lg:ml-6'>
											<span
												className='h-6 w-px bg-gray-200'
												aria-hidden='true'
											/>
										</div>
									)}

									<div className='ml-4 flow-root lg:ml-6'>
										<Cart />
									</div>
								</div>
							</div>
						</div>
					</div>
				</Layout_max_width_wrapper>
			</header>
		</div >
	)
}

export default Navbar
