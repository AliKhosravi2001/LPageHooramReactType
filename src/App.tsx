import "./App.css";
import HeadLand from "@/components/HeadLand/HeadLand";
import alibaba from "@/assets/pic/alibaba.jpg";
import Foreign_currency_payment from "@/assets/pic/Foreign currency payment.jpg";
import International_shipping from "@/assets/pic/International shipping.jpg";
import Türkiye from "@/assets/pic/Türkiye.jpg";
import UAE from "@/assets/pic/UAE.jpg";
import Wholesale_and_single_purchase from "@/assets/pic/Wholesale and single purchase.jpg";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
function App() {
  return (
    <>
      <HeadLand />
      <div className="flex justify-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="relative">
                <img
                  src={alibaba}
                  alt="خرید از علی بابا"
                  className="pointer-events-none"
                />
                <a href="" className="absolute inset-0">
                  خرید از چین
                </a>
              </div>
            </CarouselItem>
            <CarouselItem>
              <img
                src={Foreign_currency_payment}
                alt="پرداخت ارزی"
                className="pointer-events-none"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src={International_shipping}
                alt="حمل و نقل بین المللی"
                className="pointer-events-none"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src={Türkiye}
                alt="خرید از ترکیه"
                className="pointer-events-none"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src={UAE}
                alt="خرید از امارات"
                className="pointer-events-none"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src={Wholesale_and_single_purchase}
                alt="خرید عمده و خرید تک"
                className="pointer-events-none"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
export default App;
