import { reviews } from "../contants";
import { ReviewCard } from "../components";

const CustomerReviews = () => {
	return (
		<section className="max-container">
			<h3 className="font-palanquin text-4xl text-center font-bold">
				What Our
				<span className="text-coral-red"> Customers </span> Say?
			</h3>
			<p className=" info-text m-auto mt-4 max-w-lg text-center">
				{" "}
				Hear genuine stories from our satisfied clients about their exceptional
				experiences with us.
			</p>
			<div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
				{reviews.map((reviews) => (
					<ReviewCard key={reviews.customerName} {...reviews} />
				))}
			</div>
		</section>
	);
};

export default CustomerReviews;
