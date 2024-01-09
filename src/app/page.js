import HomeLayout from "./HomeLayout/page";
import OurServices from "./components/Services/page";
import Subscribe from "./components/Subscribe/page";

export default function Home() {
  return (
    <div className="my-container">
      <HomeLayout />
      <OurServices />
      <Subscribe />
    </div>
  );
}
