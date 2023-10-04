import { shoe6, shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
	return (
		<section
			id="about-us"
			className="flex justify-between max-lg:flex-col gap-10 w-full max-container items-center">
			<div className="flex flex-1 flex-col">
				<h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
					We Provide you
					<span className="text-coral-red"> Super </span>
					<span className="text-coral-red">Quality </span>
					Shoes
				</h2>
				<p className="mt-4 lg:max-w-lg info-text">
					Crafted with precision to guarantee premium comfort and style, our
					footwear is meticulously designed to enhance your experience.
					Experience unmatched quality, innovation, and a touch of elegance with
					every step.
				</p>
				<p className="mt-6 info-text lg:max-w-lg">
					{" "}
					Our dedication to detail and excellence ensures your satisfaction
				</p>
				<div className="mt-11">
					<Button label="View Details" />
				</div>
			</div>
			<div className="flex-1 flex justify-center items-center">
				<img src={shoe8} className="w-[570px] h-[522px] object-contain" />
			</div>
		</section>
	);
};

export default SuperQuality;
