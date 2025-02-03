import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
interface ProductProps {
  title: string;
  description: string;
  price: number;
  pricetotal: number;
  weight: number;
  imageUrl: string;
}
const ProductPage: React.FC<ProductProps> = ({
  title,
  description,
  price,
  pricetotal,
  weight,
  imageUrl,
}) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full justify-center items-center">
        <div className="w-full">
          <div className="p-10 flex justify-center">
            <img src={imageUrl} alt={title} width="" />
          </div>
        </div>
        <div className="m-10">
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle>
                <h1>{title}</h1>
              </CardTitle>
              <CardDescription>
                <h3>{description}</h3>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>وزن: {weight} کیلو گرم</p>
              <p>قیمت دلاری: {price}$</p>
              <p>قیمت نهایی: {pricetotal} تومان</p>
            </CardContent>
            <CardFooter>
              <div>
                <Button>افزودن به سبد خرید</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};
export default ProductPage;
