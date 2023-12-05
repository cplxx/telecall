import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./card";
import { LocateIcon, ServerIcon, User } from "lucide-react";
import { Badge } from "./badge";
import { Client } from "@/data/clients";

const Clients = () => {
  return (
    <div className="flex items-center justify-center">
      <Card className="mt-14 flex flex-col items-center justify-center lg:justify-around lg:flex-row w-full h-48">
        {Client.map((item) => {
          return (
            <div
              key={item.title}
              className="flex items-center justify-center gap-4"
            >
              <Badge
                variant="default"
                className="rounded-full bg-primary-text w-10 h-10"
              >
                <Image
                  src={item.imageUrl}
                  width={24}
                  height={24}
                  alt={item.title}
                />
              </Badge>

              <div className="flex flex-col">
                <h1 className="font-bold w-10">{item.title}</h1>
                <p className="w-10">{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </Card>
    </div>
  );
};

export default Clients;
