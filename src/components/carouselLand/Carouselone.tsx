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
export default function Carouselone() {
  return (
    <div className="flex justify-center static">
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
                className="pointer-events-none brightness-50"
              />
              <div className="absolute top-0 flex justify-center items-center w-full h-full">
                <a href="">
                  <h1 className=" text-center text-white md:text-6xl sm:text-5xl text-2xl">
                    خرید از چین
                  </h1>
                </a>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative">
              <img
                src={Foreign_currency_payment}
                alt="پرداخت ارزی"
                className="pointer-events-none brightness-50"
              />
              <div className="absolute top-0 flex justify-center items-center w-full h-full">
                <a href="">
                  <h1 className=" text-center text-white md:text-6xl sm:text-5xl text-2xl">
                    پرداخت ارزی
                  </h1>
                </a>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative">
              <img
                src={International_shipping}
                alt="حمل و نقل بین المللی"
                className="pointer-events-none brightness-50"
              />
              <div className="absolute top-0 flex justify-center items-center w-full h-full">
                <a href="">
                  <h1 className=" text-center text-white md:text-6xl sm:text-5xl text-2xl">
                    حمل و نقل بین المللی
                  </h1>
                </a>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative">
              <img
                src={Türkiye}
                alt="خرید از ترکیه"
                className="pointer-events-none brightness-50"
              />
              <div className="absolute top-0 flex justify-center items-center w-full h-full">
                <a href="">
                  <h1 className=" text-center text-white md:text-6xl sm:text-5xl text-2xl">
                    خرید از ترکیه
                  </h1>
                </a>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative">
              <img
                src={UAE}
                alt="خرید از امارات"
                className="pointer-events-none brightness-50"
              />
              <div className="absolute top-0 flex justify-center items-center w-full h-full">
                <a href="">
                  <h1 className=" text-center text-white md:text-6xl sm:text-5xl text-2xl">
                    خرید از امارات
                  </h1>
                </a>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative">
              <img
                src={Wholesale_and_single_purchase}
                alt="خرید عمده و خرید تک"
                className="pointer-events-none brightness-50"
              />
              <div className="absolute top-0 flex justify-center items-center w-full h-full">
                <a href="">
                  <h1 className=" text-center text-white md:text-6xl sm:text-5xl text-2xl">
                    خرید عمده و خرید تک
                  </h1>
                </a>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
