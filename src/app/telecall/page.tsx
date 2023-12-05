import BetterTogether from "@/components/ui/better-together";
import Campaign from "@/components/ui/campaign";
import Clients from "@/components/ui/clients";
import Customers from "@/components/ui/customers";
import Header from "@/components/ui/header/header";
import Hero from "@/components/ui/hero";
import Partners from "@/components/ui/partnerts";
import Products from "@/components/ui/products";

export default function Home() {
  return (
    <main className="min-h-screen p-14 2xl:px-72  ">
      <Header />
      <Hero />
      <Clients />
      <Campaign />
      <Products />
      <BetterTogether />
      <Partners />
      <Customers />
    </main>
  );
}
