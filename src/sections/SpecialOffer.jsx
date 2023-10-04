import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
	return (
		<section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
			<div className="flex-1">
				<img
					src={offer}
					alt="Shoe Promotion"
					width={773}
					height={687}
					className="object-contain w-full"
				/>
			</div>
			<div className="flex flex-1 flex-col">
				<h2 className="text-4xl font-palanquin font-bold">
					<span className="text-coral-red">Special </span>
					Offer
				</h2>
				<p className="mt-4 info-text">
					Embark on an unmissable shopping journey, unlocking unbeatable deals
					that redefine your experience. From premier selections to incredible
					savings, we offer unparalleled value that sets us apart.
				</p>
				<p className="mt-6 info-text">
					Dive into a realm of possibilities designed to exceed your unique
					desires, surpassing even the loftiest expectations. Your journey with
					us is an exceptional deal you won't want to miss.
				</p>

				<div className="mt-11 flex flex-wrap gap-4">
					<Button label="Shop now" iconURL={arrowRight} />
					<Button
						label="Learn more"
						backgroundColor="bg-white"
						borderColor="border-slate-gray"
						textColor="text-slate-gray"
					/>
				</div>
			</div>
		</section>
	);
};

export default SpecialOffer;
