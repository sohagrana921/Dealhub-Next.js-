import Banner from "./components/Banner/page";
import Categories from "./components/Categories/page";
import LatestProducts from "./components/LatestProducts/page";
import Navbar from "./components/Navbar/page";

export default function Home() {
  return (
    <main>
      <div className="pt-6 mx-2 hidden bg-white lg:block">
        <div className="grid grid-cols-5 gap-2 ">
          {/* Categories */}
          <div>
            <Categories />
            <LatestProducts />
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-4 gap-2">
              {/* Cover Page */}
              <div className="col-span-3 border ">
                <Navbar />
                <Banner />
              </div>

              {/*Recent Products */}
              <div className="bg-green-500 p-1 border ">
                <h1>Recent Products</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile  */}
      <div className="mobile lg:hidden">
        <Navbar />
        <Banner />
        <LatestProducts />
      </div>
    </main>
  );
}
