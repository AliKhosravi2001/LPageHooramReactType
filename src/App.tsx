import "./App.css";
import Carouselone from "./components/carouselLand/Carouselone";
import "@/assets/fontawesome-free-6.5.2-web/css/all.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeadLand from "./components/HeadLand/HeadLand";

function App() {
  return (
    <>
      <div className="font-estedad">
        <HeadLand />
        <Carouselone />
        <div className="flex items-center py-4">
          <div className="w-full h-0 mx-8 border border-black"></div>
          <h3 className="text-xl sm:text-2xl">خدمات</h3>
          <div className="w-full h-0 mx-8 border border-black"></div>
        </div>
        <div className="w-full flex flex-col items-center mt-3 gap-3">
          <div className="w-full flex flex-col justify-center items-center md:flex-row gap-3">
            <Card className="md:w-[40%] w-[90%]">
              <CardHeader>
                <CardTitle className="text-xl sm:text:2xl">
                  خرید از چین
                </CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card className="md:w-[40%] w-[90%]">
              <CardHeader>
                <CardTitle className="text-xl sm:text:2xl">
                  پرداخت ارزی
                </CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
          <div className="w-full flex flex-col justify-center items-center md:flex-row gap-3">
            <Card className="md:w-[40%] w-[90%]">
              <CardHeader>
                <CardTitle className="text-xl sm:text:2xl">
                  حمل و نقل بین المللی
                </CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card className="md:w-[40%] w-[90%]">
              <CardHeader>
                <CardTitle className="text-xl sm:text:2xl">
                  خرید از ترکیه
                </CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
          <div className="w-full flex flex-col justify-center items-center md:flex-row gap-3">
            <Card className="md:w-[40%] w-[90%]">
              <CardHeader>
                <CardTitle className="text-xl sm:text:2xl">
                  خرید از امارات
                </CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card className="md:w-[40%] w-[90%]">
              <CardHeader>
                <CardTitle className="text-xl sm:text:2xl">
                  خرید عمده و خرید تک
                </CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
