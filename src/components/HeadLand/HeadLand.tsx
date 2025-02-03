import { Button } from "../ui/button";
import logohooram from "@/assets/horam.png";
import texthooram from "@/assets/hooram.png";

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

export default function HeadLand() {
  return (
    <nav className="block w-full h-20 bg-[#F3D012] sticky z-50">
      <div className="flex justify-center">
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
      </div>
    </nav>
  );
}
