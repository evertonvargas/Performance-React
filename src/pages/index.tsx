import { FormEvent, useCallback, useState } from "react";
import { SearchResults } from "../components/SearchResult";

import styles from "../styles/Home.module.scss";

/*
  qnd um componente renderiza, todas as funções são recriadas e ocupa um novo espaço na memória
  porém com useCallback isso não ocorre, pq não é criado um novo espaço na memória e não causa renderização desnecessária

  useCallback é usado para memorizar uma função

*/

export default function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      // if search is empty
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    console.log(data);
    setResults(data);
  }

  const AddToWishList = useCallback(async (id: number) => {
    console.log(id);
  }, []);

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <SearchResults onAddToWishList={AddToWishList} results={results} />
    </div>
  );
}
