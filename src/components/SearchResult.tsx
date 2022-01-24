import { ProductItem } from "./ProductItem";

interface SearchResultProps {
  results: Array<{
    id: number;
    price: number;
    name: string;
  }>
}

export function SearchResults({results}: SearchResultProps){
  return (
    <div>
      {results.map((product, index) => {
        return(
          <ProductItem key={index} product={product} />
        );
      })}
    </div>
  );
}