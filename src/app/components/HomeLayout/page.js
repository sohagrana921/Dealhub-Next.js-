import Banner from "../Banner/page";
import Categories from "../Categories/page";

export default function HomeLayout() {
  return (
    <main>
      <div className="pt-4 mx-2 hidden bg-white lg:block mt-24">
        <div className="grid grid-cols-5 gap-2 ">
          {/* Categories */}
          <div className="col-span-1">
            <Categories />
          </div>
          <div className="col-span-4">
            <Banner />
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="lg:hidden">
        <Banner />
        <Categories />
      </div>
    </main>
  );
}
