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

import { Button } from "@/components/ui/button";
import logohooram from "@/assets/horam.png";
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
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

function App() {
  return (
    <>
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
                      <DialogTrigger asChild>
                        <Button>ورود / ثبت نام</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <div className="flex justify-center items-center w-[100%]">
                          <img
                            src={logohooram}
                            alt="لوگو تجارت ماندگار هورام"
                            className="h-20 pointer-events-none"
                          />
                        </div>
                        <DialogHeader>
                          <DialogTitle> ورود | ثبت نام</DialogTitle>
                          <DialogDescription>
                            لطفا شماره موبایل یا ایمیل خود را وارد کنید
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4 ">
                            <Input id="user" className="col-span-full" />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">ورود</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Button>
                      <a href="china.store">خرید از چین</a>
                    </Button>
                    <Button>
                      <a href="UAE.store">خرید از امارات</a>
                    </Button>
                    <Button>
                      <a href="turkish.store">خرید از ترکیه</a>
                    </Button>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className="min-h-12 min-w-32  hidden xl:block">
            <Button>
              <a href="china.store">خرید از چین</a>
            </Button>
          </div>
          <div className="min-h-12 min-w-32  hidden xl:block">
            <Button>
              <a href="UAE.store">خرید از امارات</a>
            </Button>
          </div>
          <div className="min-h-12 min-w-32  hidden xl:block">
            <Button>
              <a href="turkish.store">خرید از ترکیه</a>
            </Button>
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
              <DialogTrigger asChild>
                <Button>ورود / ثبت نام</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <div className="flex justify-center items-center w-[100%]">
                  <img
                    src={logohooram}
                    alt="لوگو تجارت ماندگار هورام"
                    className="h-20 pointer-events-none"
                  />
                </div>
                <DialogHeader>
                  <DialogTitle> ورود | ثبت نام</DialogTitle>
                  <DialogDescription>
                    لطفا شماره موبایل یا ایمیل خود را وارد کنید
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4 ">
                    <Input id="user" className="col-span-full" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">ورود</Button>
                </DialogFooter>
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
    </>
  );
}
export default App;
