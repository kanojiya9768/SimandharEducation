import React from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState, useEffect } from "react";
import Image from 'next/image';
import $ from 'jquery';
import {BsChevronDoubleLeft} from 'react-icons/bs'

const SideTab = () => {
	useEffect(() => {
		$(".sub-menu-navbar li button").click(function () {
			$(this).parent().siblings().find(".sub-menu").slideUp()
			$(this).next(".sub-menu").slideDown()
			$(this).parent().siblings().find("button").removeClass("active")
			$(this).addClass("active")
		})

		document.getElementById('website-cms').addEventListener('click',(e)=>{
			document.getElementById('sub-menu-box').classList.add('active')
		})

		document.getElementById('HideSide').addEventListener('click',(e)=>{
			document.getElementById('sub-menu-box').classList.remove('active')
		})

	}, [])


	return (
		<>
			<div className='admin-wrapper'>
				<aside className='aside-nav'>
					<div className='main-menu-box'>
						<div className="heading">
							<h3 className="dashboard-title">Simandhar Dashboard <button className="nav-bar"><Image loading='lazy' src='/img/cms/close_menu.svg'fill={true} sizes='100vw' className='resp-img' alt='' /></button></h3>
						</div>
						<nav className='aside-menu'>
							<Link href="" className='website-cms' id="website-cms">
								<i><Image loading='lazy' src='/img/cms/web_cms.svg'fill={true} sizes='100vw' className='resp-img' alt='' /></i>
								<span>Website CMS</span>
							</Link>
							<Link href="">
								<i><Image loading='lazy' src='/img/cms/course.svg'fill={true} sizes='100vw' className='resp-img' alt='' /></i>
								<span>Courses Creation</span>
							</Link>
							<Link href="">
								<i><Image loading='lazy' src='/img/cms/jobs.svg'fill={true} sizes='100vw' className='resp-img' alt='' /></i>
								<span>Jobs</span>
							</Link>
							<Link href="">
								<i><Image loading='lazy' src='/img/cms/approval.svg'fill={true} sizes='100vw' className='resp-img' alt='' /></i>
								<span>Approvals</span>
							</Link>
							<Link href="">
								<i><Image loading='lazy' src='/img/cms/cm.svg'fill={true} sizes='100vw' className='resp-img' alt='' /></i>
								<span>Candidate Management</span>
							</Link>
							<Link href="">
								<i><Image loading='lazy' src='/img/cms/rm.svg'fill={true} sizes='100vw' className='resp-img' alt='' /></i>
								<span>Recruiter Management</span>
							</Link>
							<Link href="">
								<i><Image loading='lazy' src='/img/cms/comp_mang.svg'fill={true} sizes='100vw' className='resp-img' alt='' /></i>
								<span>Company Management</span>
							</Link>
						</nav>
					</div>
					<div className='sub-menu-box' id="sub-menu-box">
						<h2 className='submenu-title'>Webpages <BsChevronDoubleLeft style={{position : "absolute",top : "10px" , right : "10px" , cursor : "pointer" , fontSize : "20px"}} id="HideSide" /></h2>
						<nav className='sub-menu-navbar custom-scrollbar'>
							<ul>
								<li>
									<button className='dropdown-link'>
										Homepage
										<span><Image loading='lazy' src='/img/cms/down_arrow.svg'fill={true} sizes='100vw' className='resp-img' alt='' /></span>
									</button>
									<div className='sub-menu'>
										<Link className="active" href="/Admin/Home/offer">Promo Ribbon</Link>
										<Link href="/Admin/Home/banner">Main Header Sliders</Link>
										<Link href="/Admin/Home/whySimandhar">Why Simandhar</Link>
										<Link href="/Admin/Home/placement">Placements & Alumni</Link>
										<Link href="/Admin/Home/video">Students Who Made Big</Link>
										<Link href="/Admin/Home/testimonial">Achiever Testimonials</Link>
										<Link href="/Admin/Home/tieup">Corporate Tieups</Link>
										<Link href="/Admin/Home/partner">Loan Partners</Link>
										<Link href="/Admin/Home/media">Media Recognitions</Link>
										<Link href="/Admin/Home/download">Download Prospectus</Link>
									</div>
								</li>
								<li>
									<button className='dropdown-link'>
										About
										<span><Image loading='lazy' src='/img/cms/down_arrow.svg'fill={true} sizes='100vw' className='resp-img' alt='' /></span>
									</button>
									<div className='sub-menu'>
										<Link href="/Admin/About/giant">The right step to take a giant leap</Link>
										<Link href="/Admin/About/partners">Our official Partners</Link>
									</div>
								</li>
								<li>
									<Link href="/Admin/USA-visit-Page/cardelements" className='dropdown-link'>
										Sripal Jain USA visit Page
									</Link>
								</li>
								<li>
									<Link href="/Admin/CPA/Corporate-Tie-Ups/logos" className='dropdown-link'>
										Corporate Tie-Ups
									</Link>
								</li>
								<li>
									<button className='dropdown-link'>
										Corporate Events-Ups
										<span><Image loading='lazy' src='/img/cms/down_arrow.svg'fill={true} sizes='100vw' className='resp-img' alt='' /></span>
									</button>
									<div className='sub-menu'>
										<Link href="/Admin/CPA/Corporate-Events-Ups/posts">Add more posts</Link>
										<Link href="/Admin/CPA/Corporate-Events-Ups/webinars">Recorded Webinars</Link>
									</div>
								</li>
								<li>
									<button className='dropdown-link'>
										Testimonials
										<span><Image loading='lazy' src='/img/cms/down_arrow.svg'fill={true} sizes='100vw' className='resp-img' alt='' /></span>
									</button>
									<div className='sub-menu'>
										<Link href="/Admin/CPA/Testimonials/video">Top video section</Link>
										<Link href="/Admin/CPA/Testimonials/licensee">US CPA Licensee</Link>
										<Link href="/Admin/CPA/Testimonials/placement">Simandhar Recent US CPA and US CMA Placements</Link>
										<Link href="/Admin/CPA/Testimonials/achiever">Achiever Testimonials</Link>
									</div>
								</li>
								<li>
									<button className='dropdown-link'>
										Testimonials Videos
										<span><Image loading='lazy' src='/img/cms/down_arrow.svg'fill={true} sizes='100vw' className='resp-img' alt='' /></span>
									</button>
									<div className='sub-menu'>
										<Link href="/Admin/CPA/Testimonials-Video/featured">Featured Testimonials</Link>
										<Link href="/Admin/CPA/Testimonials-Video/cpavideos">US CPA Videos</Link>
										<Link href="/Admin/CPA/Testimonials-Video/cmavideos">US CMA Videos</Link>
										<Link href="/Admin/CPA/Testimonials-Video/eavideos">EA Videos</Link>
									</div>
								</li>
								<li>
									<button className='dropdown-link'>
										US CPA
										<span><Image loading='lazy' src='/img/cms/down_arrow.svg'fill={true} sizes='100vw' className='resp-img' alt='' /></span>
									</button>
									<div className='sub-menu'>
										<Link className="heading05" href="/Admin/CPA/journey">CPA Journey Simplified</Link>
										<Link className="heading05" href="/Admin/CPA/curriculum">CPA Curriculum section</Link>
										<Link className="heading05" href="/Admin/CPA/locations">CPA Prometric Locations/Centres in India</Link>
										<Link className="heading05" href="/Admin/CPA/content">Our Content Partners </Link>
										<Link className="heading05" href="/Admin/CPA/achievers">What our achievers have to say</Link>
										<Link className="heading05" href="/Admin/CPA/placement">Our Placement Partners</Link>
									</div>
								</li>
								<li>
									<Link className="dropdown-link" href="/Admin/CPA/Canada/canada">
										US CPA - Canada
									</Link>
								</li>
								<li>
									<Link className="dropdown-link" href="/Admin/CPA/Fees/fees">
										US CPA - Fees
									</Link>
								</li>
								<li>
									<button className='dropdown-link'>
										US CPA Alumni
										<span><Image loading='lazy' src='/img/cms/down_arrow.svg'fill={true} sizes='100vw' className='resp-img' alt='' /></span>
									</button>
									<div className='sub-menu'>
										<Link className="heading05" href="/Admin/CPA/Alumni/alumni">Alumni</Link>
										<Link className="heading05" href="/Admin/CPA/Alumni/achievers">Our Achievers</Link>
									</div>
								</li>
								<li>
									<Link className="dropdown-link" href="/Admin/CPA/BridgeCourse/course">
										US CPA - Bridge Course
									</Link>
								</li>
								<li>
									<button className='dropdown-link'>
										US CPA Elijah
										<span><Image loading='lazy' src='/img/cms/down_arrow.svg'fill={true} sizes='100vw' className='resp-img' alt='' /></span>
									</button>

									<div className='sub-menu'>
										<Link className="heading05" href="/Admin/CPA/WattSells/elijahwatt">Elijah Watt Sells </Link>
										<Link className="heading05" href="/Admin/CPA/WattSells/placement">Simandhar Educations Recent CPA and CMA Placements</Link>
										<Link className="heading05" href="/Admin/CPA/WattSells/journey">Hear what topper has to say about his journey</Link>
									</div>
								</li>
								<li>
									<button className='dropdown-link'>
										US CPA Accounting
										<span><Image loading='lazy' src='/img/cms/down_arrow.svg'fill={true} sizes='100vw' className='resp-img' alt='' /></span>
									</button>
									<div className='sub-menu'>
										<Link className="heading05" href="/Admin/CPA/Accounting/basicsAccounting">Basics of Accounting</Link>
										<Link className="heading05" href="/Admin/CPA/Accounting/unique">What makes us unique</Link>
									</div>
								</li>
								<li>
									<Link href="/Admin/CPA/Faculty/faculty" className='dropdown-link'>US CPA FACULTY</Link>
								</li>
								<li>
									<Link href="/Admin/CPA/CPA_JOBS/jobs" className='dropdown-link'>US CPA JOBS</Link>
								</li>
								<li>
									<Link href="/Admin/CPA/CMA_JOBS/jobs" className='dropdown-link'>US CMA JOBS</Link>
								</li>
								{/* <li>
									<Link href="/Admin/EA/eytakeaways" className='dropdown-link'>EA - Key takeaways</Link>
								</li> */}
								<li>
									<button className='dropdown-link'>
									    EA - Key takeaways
										<span><Image loading='lazy' src='/img/cms/down_arrow.svg'fill={true} sizes='100vw' className='resp-img' alt='' /></span>
									</button>
									<div className='sub-menu'>
										<Link className="heading05" href="/Admin/EA/topsection">Top Sections</Link>
										<Link className="heading05" href="/Admin/EA/eytakeaways">Key takeaways</Link>
									</div>
								</li>
								<li>
									<Link href="/Admin/Resources/resources" className='dropdown-link'>Resources - Download Prospectus</Link>
								</li>
								<li>
									<Link href="/Admin/Corporate-Journey/journey" className='dropdown-link'>Corporate Journey - From the students who made it big</Link>
								</li>
								<li>
									<button className='dropdown-link'>
										Samarth
										<span><Image loading='lazy' src='/img/cms/down_arrow.svg'fill={true} sizes='100vw' className='resp-img' alt='' /></span>
									</button>
									<div className='sub-menu'>
										<Link className="heading05" href="/Admin/samarth/topsection">Top section</Link>
										<Link className="heading05" href="/Admin/samarth/prospectus">Prepare with India’s trusted institute (download prospectus)</Link>
										<Link className="heading05" href="/Admin/samarth/workshop_schedule">Simandhar's Samarth Workshop Schedule</Link>
									</div>
								</li>
							</ul>
						</nav>
					</div>
				</aside>
				<section className='dashboard-section'>

				</section>
			</div>
		</>
	)
}


export default SideTab