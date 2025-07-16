import React from 'react';
import logo from '../assets/logos/logo.png';

export default function Footer() {
	const quickLinks = [
		{ name: 'About us', href: '/#aboutus' },
		{ name: 'Features', href: '/#features' },
		{ name: 'Solutions', href: '/#solutions' },
		{ name: 'FAQs', href: '/#faq' },
		{ name: 'Contact', href: '#contact' }
	];

	return (
		<footer className="text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				{/* Main Footer Content */}
				<div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-16">
					{/* Logo */}
					<div className="mb-8 lg:mb-0">
						<img src={logo} alt="Asbionix Logo" className="h-20 mb-4" />
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-medium mb-6">Quick links</h3>
						<div className="grid grid-cols-2 gap-x-16 gap-y-4">
							{quickLinks.map((link, index) => (
								<a
									key={index}
									href={link.href}
									className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
								>
									{link.name}
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-8 border-t border-gray-100/10">
					<p className="text-gray-400 text-sm mb-4 sm:mb-0">
						© 2025 Asbionix. All rights reserved.
					</p>
					<p className="text-gray-400 text-sm">
						Website design by <span className="text-gray-300">Better Call Devs</span>
					</p>
				</div>
			</div>
		</footer>
	);
}