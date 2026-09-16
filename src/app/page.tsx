import Carousel from "./components/carousel";
import Header from "./components/header"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Carousel />

      <a href="/tramps">View Our Tramps</a>

      <section className="h-36 bg-gray-200" />

      <section className="h-96 bg-gray-300" ></section>

      <section className="h-96 bg-gray-200" ></section>

      <section className="h-96 bg-gray-300" ></section>

      <section className="h-96 bg-gray-200" ></section>

      <Footer />
    </main>
  );
}
