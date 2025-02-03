import "./App.css";
import Carouselone from "./components/carouselLand/Carouselone";
import "@/assets/fontawesome-free-6.5.2-web/css/all.css";
import HeadLand from "./components/HeadLand/HeadLand";
import Section1 from "./components/sectionsLand/Section1";
import ProductPage from "./components/Product page/product";
const productData = {
  id: "123",
  title:
    "SY830 Wired stereo headphone noise cancelling gamer headset led gaming headphone with mic for PC headset game ps45 switch xbox",
  description:
    "SY830 هدفون استریو سیمی حذف نویز هدست گیمر هدفون led گیمر با میکروفون برای بازی هدست کامپیوتر سوئیچ ps45 xbox",
  price: 4,
  pricetotal: 340000,
  weight: 1,
  imageUrl:
    "https://s.alicdn.com/@sc04/kf/S496e23c4e48547b0a7e8a4806b52e900F.jpg_720x720q50.jpg",
};
function App() {
  return (
    <>
      <div className="font-estedad">
        <HeadLand />
        <Carouselone />
        <Section1 />
        <ProductPage {...productData} />
      </div>
    </>
  );
}
export default App;
