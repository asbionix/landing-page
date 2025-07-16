import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Link2, Link2OffIcon, ExternalLink } from 'lucide-react';
import Logo from '../assets/logos/logo.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { navItems } from '../constants'
import BookDemo from './BookDemo';

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState(null);
	const [isScrolled, setIsScrolled] = useState(false);
	const dropdownTimeoutRef = useRef(null);
	const menuRef = useRef(null);
	const buttonRef = useRef(null);
	const desktopDropdownRef = useRef(null);
	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset;
			setIsScrolled(scrollTop > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		const handleClickOutside = (event) => {
			const isInsideMenu = menuRef.current?.contains(event.target);
			const isInsideButton = buttonRef.current?.contains(event.target);
			const isInsideDesktopDropdown = desktopDropdownRef.current?.contains(event.target);

			if (!isInsideMenu && !isInsideButton && !isInsideDesktopDropdown) {
				setIsMobileMenuOpen(false);
				setActiveDropdown(null);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);


	const handleDropdownEnter = (dropdownName) => {
		if (dropdownTimeoutRef.current) {
			clearTimeout(dropdownTimeoutRef.current);
		}
		setActiveDropdown(dropdownName);
	};

	const handleDropdownLeave = () => {
		dropdownTimeoutRef.current = setTimeout(() => {
			setActiveDropdown(null);
		}, 150);
	};

	return (
		<nav className={`fixed top-[10px] left-0 right-0 z-50  mx-auto transition-all duration-500 ease-in-out ${isScrolled
			? 'backdrop-blur-md bg-black/30 border border-white/20 shadow-xl w-[90%] sm:w-3/4 top-[20px] rounded-md sm:rounded-full'
			: 'bg-transparent border-b border-transparent shadow-none w-full'
			}`}>
			<div className="max-w-7xl mx-auto px-4">
				<div className={`flex items-center justify-between h-16 transition-all duration-500 ${isScrolled ? 'h-14' : 'h-16'
					}`}>
					{/* Logo */}
					<Link to={'/'} className="flex-shrink-0 flex items-center justify-center cursor-pointer">
						<img src={Logo} alt="Asbionix Logo" className={`h-12 w-auto transition-all duration-300 ${isScrolled ? 'opacity-90' : 'opacity-100'}`} />
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:block">
						<div className="relative flex items-baseline space-x-4">
							{navItems.map((item) => (
								<div
									key={item.name}
									className="relative"
									onMouseEnter={() => item.expandable && handleDropdownEnter(item.name)}
									onMouseLeave={() => item.expandable && handleDropdownLeave()}
								>
									{item.name === 'Contact' ? (
										<a
											href={item.link}
											className={`px-3 cursor-pointer py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-1 ${isScrolled
												? 'text-white hover:bg-white/30'
												: 'text-white hover:bg-white/20'
												}`}
										>
											{item.name}
											{item.expandable && (
												<ChevronDown
													className={`w-4 h-4 transition-all duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
														}`}
												/>
											)}
										</a>
									) : (
										<Link
											to={item.link}
											className={`px-3 cursor-pointer py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-1 ${isScrolled
												? 'text-white hover:bg-white/30'
												: 'text-white hover:bg-white/20'
												}`}
										>
											{item.name}
											{item.expandable && (
												<ChevronDown
													className={`w-4 h-4 transition-all duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
														}`}
												/>
											)}
										</Link>
									)}

									{/* Enhanced Dropdown Menu */}
									{item.expandable && activeDropdown === item.name && (
										<div
											ref={desktopDropdownRef}
											className="absolute left-1/2 min-w-2xl lg:min-w-4xl max-w-3xl lg:max-w-7xl top-[50px] mt-2 -translate-x-1/2 bg-[#2c2c2c] rounded-lg backdrop-blur-md shadow-xl z-50 px-4 py-3">
											<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
												{item.siblings.map((sibling) => {
													const IconComponent = sibling.icon;
													return (
														<a
															key={sibling.title}
															href={`/feature/${sibling.link}`}
															onClick={() => setActiveDropdown(null)}
															className={`cursor-pointer flex flex-col items-start gap-3 p-3 rounded-md transition-all duration-200 hover:translate-x-1 ${isScrolled
																? 'text-white hover:bg-white/20 hover:text-[#39e75f]'
																: 'text-white hover:bg-white/10 hover:text-[#73df8b]'
																}`}
														>
															<div className="flex-shrink-0 flex items-center justify-center gap-3 mt-1">
																<IconComponent className="w-7 h-7" />
																<div className="text-sm align-middle font-medium">
																	{sibling.title}
																</div>
															</div>
															<div className="flex-1 min-w-0">
																<div className="text-xs text-white/70 leading-relaxed">
																	{sibling.description}
																</div>
															</div>
														</a>
													);
												})}
											</div>
										</div>
									)}
								</div>
							))}
						</div>
					</div>

					<div className='hidden md:block'>
						<BookDemo />
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							ref={buttonRef}
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className={`p-2 rounded-md transition-all duration-300 cursor-pointer ${isScrolled
								? 'text-white hover:text-blue-300 hover:bg-white/10'
								: 'text-white hover:text-blue-200 hover:bg-white/5'
								}`}
						>
							{isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				ref={menuRef}
				className={`md:hidden rounded-b-md mobile-menu transition-all duration-500 backdrop-blur-md bg-[#2c2c2c] border border-white/20 ease-in-out overflow-auto
  		  ${isScrolled ? 'm-0' : 'm-2'}
				${isMobileMenuOpen ? 'opacity-100 transform' : 'max-h-0 opacity-0'}`}>
				<div className="px-4 pt-4 pb-6 space-y-2 sm:px-5">
					{navItems.map((item) => (
						<>
							{item.name === 'Contact' ? (
								<a href={item.link} key={item.name}>
									{/* Main Item */}
									<div
										className={`flex justify-between items-center p-4 rounded-md text-base font-medium cursor-pointer transition-all duration-300 ${isScrolled
											? 'text-white hover:text-[#39e75f] hover:bg-white/20'
											: 'text-white hover:text-[#71d586] hover:bg-white/10'
											}`}
										onClick={() => {
											if (item.expandable) {
												setActiveDropdown(activeDropdown === item.name ? null : item.name);
											} else {
												setIsMobileMenuOpen(false);
												setActiveDropdown(null);
											}
										}}
									>
										<span>{item.name}</span>
									</div>
								</a>
							) : (
								<Link to={item.link} key={item.name}>
									{/* Main Item */}
									<div
										className={`flex justify-between items-center p-4 rounded-md text-base font-medium cursor-pointer transition-all duration-300 ${isScrolled
											? 'text-white hover:text-[#39e75f] hover:bg-white/20'
											: 'text-white hover:text-[#71d586] hover:bg-white/10'
											}`}
										onClick={() => {
											if (item.expandable) {
												setActiveDropdown(activeDropdown === item.name ? null : item.name);
											} else {
												setIsMobileMenuOpen(false);
												setActiveDropdown(null);
											}
										}}
									>
										<span>{item.name}</span>
										{item.expandable && (
											<ChevronDown
												className={`w-4 h-4 transform transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
											/>
										)}
									</div>

									{/* Accordion Content */}
									{item.expandable && activeDropdown === item.name && (
										<motion.div className={`pl-3 mt-2 space-y-1 max-h-[300px] overflow-y-auto`}
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}>
											{item.siblings.map((sibling) => {
												const IconComponent = sibling.icon;
												return (
													<a
														href={`/feature/${sibling.link}`}
														key={sibling.title}
														className={`flex flex-col items-start gap-3 p-3 rounded-md transition-all duration-300 ${isScrolled
															? 'text-white/90 hover:text-[#39e75f] hover:bg-white/15'
															: 'text-white/90 hover:text-[#71d586] hover:bg-white/10'
															}`}
														onClick={() => setIsMobileMenuOpen(false)}
													>
														<div className='flex w-full justify-between'>
															<div className='flex gap-3 items-center'>
																<IconComponent className="w-5 h-5" />
																<div className="text-sm font-medium align-middle">{sibling.title}</div>
															</div>
															<ExternalLink className="w-4 h-4 text-white/60 hover:text-white" />
														</div>
														<div className="text-xs text-white/60 leading-relaxed">
															{sibling.description}
														</div>
													</a>
												);
											})}
										</motion.div>
									)}
								</Link>)}
						</>
					))}
					<div className='flex justify-center w-full mt-4'>
						<BookDemo />
					</div>
				</div>
			</div>
		</nav >
	);
};

export default Navbar;