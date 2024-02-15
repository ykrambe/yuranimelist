import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse, getNestedAnimeResponse } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recomendAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  const defineStart = Math.floor(Math.random() * (recomendAnime.length - 4));
  recomendAnime = {
    data: recomendAnime.slice(defineStart, defineStart + 4),
  };

  return (
    <>
      {/* anime populer */}
      <section>
        <Header
          title={"Paling Populer"}
          linkTitle={"Lihat semua"}
          linkHref={"/populer"}
        />
        <AnimeList api={topAnime} />
      </section>
      {/* anime recomendasi */}
      <section>
        <Header
          title={"Rekomendasi"}
          linkTitle={"Lihat semua"}
          linkHref={"/populer"}
        />
        <AnimeList api={recomendAnime} />
      </section>
    </>
  );
};

export default Page;
