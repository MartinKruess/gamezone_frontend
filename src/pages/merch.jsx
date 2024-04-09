import { ShopFilter } from "./shop/shopFilter";
import { ShopCard } from "./shop/shoppingCard";


export const Merch = () => {
  return (
    <section className="shopContainer">
      <ShopFilter />
      <ShopCard />
    </section>
  );
};