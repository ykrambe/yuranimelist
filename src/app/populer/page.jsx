"use client";
import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);
  const fetchData = async () => {
    if (page > 0) {
      const data = await getAnimeResponse("top/anime", `page=${page}`);
      setTopAnime(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        totalPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Page;
