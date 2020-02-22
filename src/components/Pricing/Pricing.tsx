import React, { useRef, useEffect, useState } from 'react';
import useIntersection from 'react-use/lib/useIntersection';
import gsap, { Sine } from 'gsap';

export interface Props {}

const Pricing: React.FC<Props> = () => {
	const [ tween, setTween ] = useState<GSAPTween>();
	const trigger = useRef<HTMLDivElement>(null);
	const simplyGreen = useRef<HTMLDivElement>(null);
	const shockinglyGreen = useRef<HTMLDivElement>(null);
	const businessGreen = useRef<HTMLDivElement>(null);
	const intersection = useIntersection(trigger, {
		root: null,
		rootMargin: '0px',
		threshold: 0.5,
	});

	useEffect(
		() => {
			if (intersection && intersection.isIntersecting) {
				setTween(
					gsap.to([ simplyGreen.current, shockinglyGreen.current, businessGreen.current ], 0.3, {
						opacity: 1,
						y: 0,
						ease: Sine.easeIn,
						stagger: 0.2,
					}),
				);
			} else if (tween && tween.paused) {
				tween.reverse();
			}
		},
		[ intersection ],
	);

	return (
		<div data-testid="Pricing" className={`Pricing`} ref={trigger}>
			<div className="Pricing__plan" ref={simplyGreen}>
				<div className="Pricing__subtitle">Simply Green</div>
				<img src="/simply-green-plan.png" alt="Cover image for simply green plan" className="Pricing__image" />
				<p className="Pricing__description">
					For individuals who use GreenSock tools casually and want to gain access to some of the bonus
					plugins.
				</p>
			</div>
			<div className="Pricing__plan" ref={shockinglyGreen}>
				<div className="Pricing__subtitle">Shockingly Green</div>
				<img
					src="/shockingly-green-plan.png"
					alt="Cover image for shockingly green plan"
					className="Pricing__image"
				/>
				<p className="Pricing__description">
					For individuals who want all of the bonus plugins and extras, but aren’t in need of a commercial
					license.
				</p>
			</div>
			<div className="Pricing__plan" ref={businessGreen}>
				<div className="Pricing__subtitle">Business Green</div>
				<img
					src="/business-green-plan.png"
					alt="Cover image for business green plan"
					className="Pricing__image"
				/>
				<p className="Pricing__description">
					For businesses who want everything including a special commercial license. Starting at
				</p>
			</div>
		</div>
	);
};

export default Pricing;
