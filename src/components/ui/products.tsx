import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import TitleAndSubtitle from "./title-subtitle";
import { Bluetooth } from "lucide-react";
import { Button } from "./button";
import { CardProduct } from "@/data/card-products";

const Products = () => {
  return (
    <>
      <TitleAndSubtitle
        title="Melhores casos de usos"
        subtitle="Ea voluptatem nobis nihil perspiciatis animi repellendus qui qui esse. Recusandae molestias praesentium hic odit quisquam quae ullam. At fugiat voluptatum voluptas saepe cupiditate iusto quisquam. Nobis incidunt voluptatem."
      />

      <div className="flex w-full gap-5 mt-8 overflow-x-auto [&::-webkit-scrollbar]:hidden  lg:items-center lg:justify-center">
        {CardProduct.map((item, index) => {
          return (
            <Card className="w-80 min-h-[400px]" key={index}>
              <CardHeader>
                <Bluetooth size={20} className="text-primary-text mb-2" />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="link"
                  className="border border-primary-text rounded-full w-36 text-primary-text font-semibold"
                >
                  Mais informações
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
     
    </>
  );
};

export default Products;
