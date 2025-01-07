import "./App.css";
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

import Button from "@/components/button/Button";
import logohooram from "@/assets/horam.jpg";
import texthooram from "@/assets/Hooram.png";
import "@/assets/fontawesome-free-6.5.2-web/css/all.css";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function App() {
  const linkchin = () => {
    window.location.href = "china.store";
  };
  const linkemarat = () => {
    window.location.href = "UAE.store";
  };
  const linkturkie = () => {
    window.location.href = "turkish.store";
  };
  return (
    <>
      {/* <HeadLand /> */}
      <nav className=" flex justify-center  w-full h-20 bg-[#F3D012] fixed z-50 ">
        <div className="grow flex  items-center gap-4 mx-2  my-2 w-96 ">
          <div className=" block xl:hidden">
            <Sheet>
              <SheetTrigger>
                <i className="fa-solid fa-bars fa-2xl"></i>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>شرکت بازرگانی تجارت ماندگار هورام</SheetTitle>
                  <SheetDescription>
                    <Dialog>
                      <DialogTrigger>
                        <Button text="ورود / ثبت نام" />
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>ورود</DialogTitle>
                          <DialogDescription>
                            فعلا در دسترس نیست بعدا تلاش کنید
                            <br />
                            eror 404
                            <br />
                            Not found
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                    <Button text="خرید از چین" link={linkchin} />
                    <Button text="خرید از امارات" link={linkemarat} />
                    <Button text="خرید از ترکیه" link={linkturkie} />
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className="min-h-12 min-w-32  hidden xl:block">
            <Button text="خرید از چین" link={linkchin} />
          </div>
          <div className="min-h-12 min-w-32  hidden xl:block">
            <Button text="خرید از امارات" link={linkemarat} />
          </div>
          <div className="min-h-12 min-w-32  hidden xl:block">
            <Button text="خرید از ترکیه" link={linkturkie} />
          </div>
        </div>
        <a
          href="https://hooramtejarat.ir/"
          className="grow flex justify-center items-center"
        >
          <div className="flex justify-center items-center w-[100%]">
            <img
              src={logohooram}
              alt="لوگو تجارت ماندگار هورام"
              className="h-20 pointer-events-none"
            />
            <img
              src={texthooram}
              alt="شرکت بازرگانی تجارت ماندگار هورام"
              className="h-16 pointer-events-none"
            />
          </div>
        </a>

        <div className="grow mx-2  my-2 w-96 flex justify-end items-center">
          <div className=" min-h-12 min-w-32 hidden xl:block">
            <Dialog>
              <DialogTrigger>
                <Button text="ورود / ثبت نام" />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>ورود</DialogTitle>
                  <DialogDescription>
                    فعلا در دسترس نیست بعدا تلاش کنید
                    <br />
                    eror 404
                    <br />
                    Not found
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>
      <div className="flex justify-center absolute top-20">
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
