import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function Section1() {
  return (
    <>
      <div className="flex items-center py-4">
        <div className="w-full h-0 mx-8 border border-black"></div>
        <h3 className="text-xl sm:text-2xl">خدمات</h3>
        <div className="w-full h-0 mx-8 border border-black"></div>
      </div>
      <div className="w-full flex flex-col items-center mt-3 gap-3">
        <div className="w-full flex flex-col justify-center items-center md:flex-row gap-3">
          <Card className="md:w-[40%] w-[90%] rounded-xl md:h-[400px] lg:h-[350px] xl:h-[268px]">
            <CardHeader>
              <CardTitle className="text-xl sm:text:2xl">
                <h4>خرید مستقیم از چین با اطمینان و بهترین قیمت</h4>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                ما امکان خرید مستقیم از معتبرترین فروشگاه‌های آنلاین چین مانند
                علی‌بابا، 1688، تائوبائو و دیگر پلتفرم‌های بزرگ را برای شما
                فراهم می‌کنیم. اگر به دنبال کالاهای باکیفیت و قیمت مناسب هستید،
                ما با تجربه و آگاهی از فرایند خرید، حمل‌ونقل و ترخیص کالا،
                سفارشات شما را از چین تا درب منزل یا کسب‌وکارتان به‌صورت امن و
                سریع انجام می‌دهیم.
              </p>
            </CardContent>
            <CardFooter>
              <a href="" className="bg-[#F3D012] rounded-full px-3">
                راهنمای خرید از چین
              </a>
            </CardFooter>
          </Card>
          <Card className="md:w-[40%] w-[90%] rounded-xl md:h-[400px] lg:h-[350px] xl:h-[268px]">
            <CardHeader>
              <CardTitle className="text-xl sm:text:2xl">
                <h4>پرداخت ارزی سریع و مطمئن </h4>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                اگر نیاز به پرداخت ارزی در سایت‌های خارجی، خرید از فروشگاه‌های
                بین‌المللی، شارژ حساب‌های بین‌المللی یا انجام تراکنش‌های مالی
                دارید، ما این خدمات را با بهترین نرخ و کمترین کارمزد برای شما
                انجام می‌دهیم.
              </p>
            </CardContent>
            <CardFooter>
              <a href="" className="bg-[#F3D012] rounded-full px-3">
                ثبت درخواست پرداخت ارزی
              </a>
            </CardFooter>
          </Card>
        </div>
        <div className="w-full flex flex-col justify-center items-center md:flex-row gap-3">
          <Card className="md:w-[40%] w-[90%] rounded-xl md:h-[400px] lg:h-[350px] xl:h-[268px]">
            <CardHeader>
              <CardTitle className="text-xl sm:text:2xl">
                <h4>حمل و نقل بین المللی</h4>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                ما خدمات حمل و نقل بین‌المللی را از کشورهای مختلف به ایران با
                بهترین روش‌های ارسال و کمترین هزینه ارائه می‌دهیم. اگر قصد
                واردات کالا از چین، امارات، ترکیه، اروپا و دیگر کشورها را دارید،
                ما با تجربه و آگاهی از مراحل ارسال، ترخیص و تحویل، سفارش شما را
                به‌صورت ایمن و سریع به دستتان می‌رسانیم.
              </p>
            </CardContent>
            <CardFooter>
              <a href="" className="bg-[#F3D012] rounded-full px-3">
                مشاهده جزئیات و ثبت سفارش
              </a>
            </CardFooter>
          </Card>
          <Card className="md:w-[40%] w-[90%] rounded-xl md:h-[400px] lg:h-[350px] xl:h-[268px]">
            <CardHeader>
              <CardTitle className="text-xl sm:text:2xl">
                <h4>خرید مستقیم از ترکیه با بهترین قیمت</h4>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                اگر به دنبال خرید پوشاک، کیف و کفش، لوازم آرایشی، اکسسوری، قطعات
                خودرو و سایر کالاهای اورجینال از ترکیه هستید، ما این امکان را
                برای شما فراهم کرده‌ایم. شما می‌توانید از معروف‌ترین فروشگاه‌های
                آنلاین ترکیه مانند ترندیول، هبسی بورادا، ن11 و دیگر برندهای
                معتبر خرید کنید و ما سفارش شما را سریع و مطمئن به ایران ارسال
                می‌کنیم.
              </p>
            </CardContent>
            <CardFooter>
              <a href="" className="bg-[#F3D012] rounded-full px-3">
                راهنمای خرید از ترکیه
              </a>
            </CardFooter>
          </Card>
        </div>
        <div className="w-full flex flex-col justify-center items-center md:flex-row gap-3">
          <Card className="md:w-[40%] w-[90%] rounded-xl md:h-[400px] lg:h-[350px] xl:h-[268px]">
            <CardHeader>
              <CardTitle className="text-xl sm:text:2xl">
                <h4>خرید مستقیم از امارات، سریع و مطمئن</h4>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                اگر به دنبال خرید موبایل، لپ‌تاپ، لوازم الکترونیکی، قطعات خودرو،
                پوشاک، عطر و سایر کالاهای اصل از امارات هستید، ما امکان ثبت
                سفارش و ارسال سریع به ایران را برای شما فراهم کرده‌ایم. شما
                می‌توانید از برترین فروشگاه‌های آنلاین امارات مانند آمازون
                امارات، نون، کریفور، سوق و برندهای معتبر خرید کنید و سفارش خود
                را با خیال راحت دریافت کنید.
              </p>
            </CardContent>
            <CardFooter>
              <a href="" className="bg-[#F3D012] rounded-full px-3">
                راهنمای خرید از امارت
              </a>
            </CardFooter>
          </Card>
          <Card className="md:w-[40%] w-[90%] rounded-xl md:h-[400px] lg:h-[350px] xl:h-[268px]">
            <CardHeader>
              <CardTitle className="text-xl sm:text:2xl">
                <h4>خرید عمده و خرید تک از سراسر جهان</h4>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                ما امکان خرید عمده و تک‌فروشی انواع کالاها از چین، ترکیه، امارات
                و سایر کشورها را برای شما فراهم کرده‌ایم. چه برای مصرف شخصی
                بخواهید خرید کنید یا به دنبال تأمین کالا برای کسب‌وکار خود
                باشید، ما با بهترین قیمت و شرایط، سفارشات شما را ثبت و به ایران
                ارسال می‌کنیم.
              </p>
            </CardContent>
            <CardFooter>
              <a href="" className="bg-[#F3D012] rounded-full px-3">
                {" "}
                مشاهده جزئیات و ثبت سفارش
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
