import { MyGames } from "./landingparts/mygames";
import { NewArticles } from "./landingparts/myshop";
import { NewBlog } from "./landingparts/newBlog";
import { Termine } from "../global/termine";

export const Landingpage = () => {
  return (
    <section className="landingpage">
      <Termine />
      <MyGames />
      <NewArticles />
      <NewBlog />
    </section>
  );
};
