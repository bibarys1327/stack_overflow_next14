import { ThemeProvider } from '@/context/ThemeProvider'
import { ClerkProvider } from '@clerk/nextjs'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-inter',
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
		<html lang='en'>
			<body className={`${inter.variable}`}>
				<ClerkProvider
					appearance={{
						elements: {
							formButtonPrimary: 'primary-gradient',
							footerActionLink: 'primary-text-gradient hover:text-primary-500',
						},
					}}
				>
					<ThemeProvider>{children}</ThemeProvider>
				</ClerkProvider>
			</body>
		</html>
	)
}



