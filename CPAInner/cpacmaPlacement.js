import React ,{useState}from 'react'
import Image from 'next/image'
import Link from 'next/link'
import _ from 'lodash'

const CpacmaPlacement = ({ achieverData }) => {
    	// READ MORE FUNCTINALITY DONE HERE 
	const [showAllRows, setShowAllRows] = useState(false);
	const [buttonText, setButtonText] = useState(false);
	const showContent = () => {
		setShowAllRows(!showAllRows);
		setButtonText(!buttonText);
	};

    let list = _.get(achieverData, "list", [])
	const visibleRows = showAllRows ? list : list.slice(0, 3);

    return (
        <>
            <section className='testimonial-placement' id="placement">
                <div className="container-l">
                    <h3 className="heading02">{achieverData.mainheading}</h3>
                    <div className='placement-container'>
                        {
                            visibleRows.map(((card,index) => {
                                return <div className='pm-card' key={index}>
                                    <figure>
                                        <div className='achiever-img resp-img-box'>
                                            <Image loading='lazy' src={card.img}fill={true} sizes='100vw'  className='resp-img card-image' alt={card.achAlt}/>
                                            {/* <div className='logo'><Image loading='lazy' src={card.logo}fill={true} sizes='100vw'  className='resp-img' /></div> */}
                                        </div>
                                        <figcaption>
                                            <p className="title01">{card.name}</p>
                                            <p>{card.course}</p>
                                            <p>{card.place}</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            }))
                        }


                        {/* <div className='pm-card'>
                            <figure>
                                <div className='achiever-img resp-img-box'>
                                    <Image loading='lazy' src="/img/anjuNamapoothiry.webp"fill={true} sizes='100vw'  className='resp-img' />
                                    <div className='logo'><Image loading='lazy' src="/img/anjuNamapoothiry.webp"fill={true} sizes='100vw'  className='resp-img' /></div>
                                </div>
                                <figcaption>
                                    <p className="title01">Anju Nampoothiry</p>
                                    <p>BEC-98 - REG-97 - AUD-93 - FAR-89</p>
                                    <p>Texas - USA</p>
                                </figcaption>
                            </figure>
                        </div>
                        <div className='pm-card'>
                            <figure>
                                <div className='achiever-img resp-img-box'>
                                    <Image loading='lazy' src="/img/anjuNamapoothiry.webp"fill={true} sizes='100vw'  className='resp-img' />
                                    <div className='logo'><Image loading='lazy' src="/img/anjuNamapoothiry.webp"fill={true} sizes='100vw'  className='resp-img' /></div>
                                </div>
                                <figcaption>
                                    <p className="title01">Anju Nampoothiry</p>
                                    <p>BEC-98 - REG-97 - AUD-93 - FAR-89</p>
                                    <p>Texas - USA</p>
                                </figcaption>
                            </figure>
                        </div> */}
                    </div>
                    <div className='btn-wrap text-center' onClick={showContent}><Link href='javascript:;' className='btn maroon-border-btn maroon-border-btn-arrow'>{buttonText ? "View Less " : "View More"}</Link></div>
                </div>
            </section>
        </>
    )
}

export default CpacmaPlacement