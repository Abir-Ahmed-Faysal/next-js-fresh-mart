import Image from "next/image";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Newsletter from "./components/Newletter";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Newsletter></Newsletter>
    </div>
  );
}
