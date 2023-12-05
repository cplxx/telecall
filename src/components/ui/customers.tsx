import { CardProduct } from "@/data/card-products";
import TitleAndSubtitle from "./title-subtitle";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { Bluetooth } from "lucide-react";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { CardCustomers } from "@/data/customers";

const Customers = () => {
  return (
    <>
      <TitleAndSubtitle
        title="Clientes satisfeitos"
        subtitle="Unde fugit minus qui quisquam commodi sint repudiandae. Blanditiis consequuntur occaecati dolor qui reprehenderit dolore. "
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap lg:items-center lg:justify-center w-full gap-5 mt-8 ">
        {CardCustomers.map((item, index) => {
          return (
            <Card className="w-80" key={index}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={item.imageUrl} />
                    <AvatarFallback>{item.name}</AvatarFallback>
                  </Avatar>
                  <CardTitle>
                    <p>{item.name}</p>
                    <p className="text-xs text-gray-500">{item.lastName}</p>
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{item.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Customers;
