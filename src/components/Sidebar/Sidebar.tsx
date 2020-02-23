import React, { useRef, useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import gsap, { Elastic } from 'gsap';

export interface Props {
	open: boolean;
}

const Sidebar: React.FC<Props> = ({ open }) => {
	const menuRef = useRef<HTMLUListElement>(null);
	const [ timeline, setTimeline ] = useState<TimelineLite>();

	useEffect(() => {
		setTimeline(gsap.timeline({ reversed: true }));
	}, []);

	return (
		<Transition
			in={open}
			timeout={500}
			mountOnEnter
			unmountOnExit={false}
			addEndListener={(node, done) => {
				const sidebarRef = { current: node };
				if (!timeline) return;

				if (open) {
					timeline
						.fromTo(sidebarRef.current, 0.5, { marginLeft: '-300px' }, { marginLeft: 0 })
						.fromTo(
							menuRef.current!.children,
							{
								scale: 0.5,
								opacity: 0,
							},
							{
								opacity: 1,
								scale: 1,
								duration: 1,
								delay: -0.5,
								ease: Elastic.easeInOut,
								stagger: { amount: 0.5 },
							},
						)
						.play()
						.then(done);
				} else {
					timeline.reverse().then(done).then(() => timeline.clear());
					// or more subtle reverse function
					// gsap.fromTo(sidebarRef.current, 0.5, { marginLeft: 0 }, { marginLeft: '-300px' }).then(done);
				}
			}}
		>
			<div data-testid="Sidebar" className={`Sidebar`}>
				<ul className="Sidebar__menu" ref={menuRef}>
					<li className="Sidebar__item">Blog</li>
					<li className="Sidebar__item">About</li>
					<li className="Sidebar__item">Services</li>
					<li className="Sidebar__item">Contact</li>
				</ul>
			</div>
		</Transition>
	);
};

export default Sidebar;
