import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
	return (
		<div className="flex justify-center items-center flex-col">
			<img
				src={imgURL}
				alt="Customer"
				className="rounded-full object-cover w-[120px] h-[120px]"
			/>
			<p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
			<div className="flex gap-2 mt-3 items-center justify-center">
				<img
					src={star}
					alt="star"
					className="object-contain m-0 h-[24px] w-[24px]"
				/>
				<p className="text-xl font-montserrat text-slte-gray">({rating})</p>
			</div>
			<h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
				{customerName}
			</h3>
		</div>
	);
};

export default ReviewCard;
