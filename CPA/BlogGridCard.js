import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BlogGridCard = ({ blogCardData }) => {
	return (
		<section className='Blog-grid-section'>
			<div className="container-l">
				<div className='grid'>
					{
						blogCardData.cardData.map((data,index) => {
							return (
								<>
									<Link href={data.path} key={index}>
										< div className="blog-card" >
											<div>
												<Image loading='lazy' src={data.image} alt=""fill={true} sizes='100vw'  className='resp-img' />
											</div>
											<div className='bolg-card-content'>
												<p className="title">{data.title}</p>
												<p className="title01">{data.heading}</p>
												<p className="subtitle">{data.subtitle}</p>
											</div>
										</div>
									</Link>
								</>
							)
						})
					}
				</div>
			</div>
		</section >
	)
}

export default BlogGridCard