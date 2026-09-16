import Carousel from "../components/carousel";
import Header from "../components/header"
import Footer from "../components/footer"

export default function Tramps() {
  return (
    <main>
      <Header />
        <Carousel />
        <section className="h-36 bg-gray-200" />
        <section className="flex w-full h-[calc(100vh-6rem)]">
          <div className="w-[24rem] shrink-0">list of tramps</div>
          <div className="flex-1 bg-gray-300">info</div>
          <div className="w-[24rem] shrink-0">description of tramps / sign up page</div>
        </section>
      <Footer />
    </main>
  );
}
