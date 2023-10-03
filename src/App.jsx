import {
	CostumerReviews,
	Footer,
	Hero,
	Services,
	SuperQuality,
	Subscribe,
	PopularProducts,
	SpecialOffer,
} from "./sections";
import NavBar from "./components/NavBar";

const App = () => (
	<main className="relative">
		<NavBar />
		<section className="xl:padding-1 wide:padding-r padding-b">
			<Hero />
		</section>
		<section className="padding">
			<PopularProducts />
		</section>
		<section className="padding">
			<SuperQuality />
		</section>
		<section className="padding-x">
			<Services />
		</section>
		<section className="padding">
			<SpecialOffer />
		</section>
		<section className="padding bg-pale-blue">
			<CostumerReviews />
		</section>
		<section className="padding-x sm:pq-32 py-16 w-full">
			<Subscribe />
		</section>
		<section className="padding-x pb-8 bg-black paddint-t">
			<Footer />
		</section>
	</main>
);

export default App;
