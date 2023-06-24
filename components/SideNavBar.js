import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { FiCamera } from 'react-icons/fi'
import { usePathname } from "next/navigation";
import Head from 'next/head';
import { isUserLoggedIn } from '../utils/index';
import { useSelector } from 'react-redux';
import Image from 'next/image'



const sidebarItems = [
	{
		name: "Profile",
		href: "/profile"
	},
	{
		name: "Account Security",
		href: "/security"
	},
	{
		name: "My Courses",
		href: "/myCourse"
	},
	{
		name: "Order History",
		href: "/orderHistory"
	},
	// {
	//     name:"LMS Login",
	//     href:"/"
	// },
	{
		name: "Log Out",
		href: "/logout"
	}
]

const SideNavBar = () => {
	const userData = useSelector(state => state.user.user)

	const [userLoggedIn, setIsUserLoggedIn] = useState(null);
	const setUserStatus = () => {
		const userData = isUserLoggedIn();
		if (userData.isLoggedIn) {
			setIsUserLoggedIn(userData);
			// console.log("asidebar", userData)
		}
	}
	useEffect(() => {
		setUserStatus()
	}, []);

	const pathname = usePathname();
	const [isShow, setIsShow] = useState(false);
	const showDwnPopup = () => {
		setIsShow(!isShow);
	};

	const inputRef = useRef(null)
	const [image, setImage] = useState("")

	const handleImgClick = () => {
		inputRef.current.click();
	}
	const handleImgChange = (event) => {
		const file = event.target.files[0];
		console.log(file)
		setImage(event.target.files[0])
	}

	return (
		<>
			<Head>
				<title>
					Profile
				</title>
			</Head>
			<>
				<button className={'show-my-account' + ' ' + (isShow ? "active" : "")} onClick={showDwnPopup}>
					<span><i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z"></path></svg></i></span>
					My Account
				</button>
				<div className={'login-aside-bar' + ' ' + (isShow ? 'active' : '')}>
					<aside>
						<h4 className='heading04'>My Account</h4>
						<div className='flex'>
							<div className="avator">
								<div className='edit-profile-box' onClick={handleImgClick}>
									{image ? (
										<Image loading='lazy' src={URL.createObjectURL(image)} alt="user Avotar" className='user-avator' />
									) : (
										<Image loading='lazy' src="/img/user_profile.webp" alt="user Avotar" className='user-avator' />
									)}
									<input type="file" ref={inputRef} onChange={handleImgChange} style={{display: "none"}}/>
								</div>
								
								{/* <i>
									<FiCamera />
								</i> */}
							</div>
							<div className="name">
								<p>{userLoggedIn && userData?.fullName}</p>
							</div>
						</div>
						{
							sidebarItems.map(({ name, href }, index) => {
								return (
									<Link href={href} className={pathname == { href } ? "title01 active" : "title01"} key={index}>{name}</Link>
								)
							})
						}
					</aside>
				</div>
			</>
		</>

	)
}


export default SideNavBar