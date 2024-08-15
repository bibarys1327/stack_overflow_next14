import { ClerkProvider } from '@clerk/nextjs'
import { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-spaceGrotesk',
})

export const metadata: Metadata = {
	title: 'DevFlow',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, alias. Vitae tempora consequuntur atque accusamus adipisci aspernatur sequi voluptate modi ad similique, exercitationem culpa inventore, neque, amet consectetur consequatur impedit.',
	icons: {
		icon: '/assets/images/site-logo.svg',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<ClerkProvider
			appearance={{
				elements: {
					formButtonPrimary: 'primary-gradient',
					footerActionLink: 'primary-text-gradient hover:text-primary-500',
				},
			}}
		>
			<html lang='en'>
				<body className={`${inter.variable} ${spaceGrotesk.variable}`}>
					<h1 className='h1-bold'>This is a some text</h1>
					{children}
				</body>
			</html>
		</ClerkProvider>
	)
}
