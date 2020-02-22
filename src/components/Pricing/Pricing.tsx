import React from 'react';

export interface Props {}

const Pricing: React.FC<Props> = () => {
	return (
		<div data-testid="Pricing" className={`Pricing`}>
			<div className="Pricing__plan">
				<div className="Pricing__subtitle">Simply Green</div>
				<img src="/simply-green-plan.png" alt="Cover image for simply green plan" className="Pricing__image" />
				<p className="Pricing__description">
					For individuals who use GreenSock tools casually and want to gain access to some of the bonus
					plugins.
				</p>
			</div>
			<div className="Pricing__plan">
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
			<div className="Pricing__plan">
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
