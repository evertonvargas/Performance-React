/*
useMemo é usado qnd temos algo que consome muito processamento e o resultado não é alterado a cada renderização
Serve para memorizar um valor
Ex: cálculo
*/

import { useMemo } from 'react';
import { ProductItem } from "./ProductItem";

interface SearchResultProps {
  results: Array<{
    id: number;
    price: number;
    name: string;
  }>
  onAddToWishList: (id: number) => void;
}

export function SearchResults({results, onAddToWishList}: SearchResultProps){
  // resultado não se altera e consome processamento toda vez
  const totalPrice = useMemo(() => {
    return results.reduce((acc, product) => {
      return acc + product.price;
  }, 0);
}, [results]);

  return (
    <div>
      <h2>Total: {totalPrice}</h2>

      {results.map((product) => {
        return(
          <ProductItem key={product.id} onAddToWishList={onAddToWishList} product={product} />
        );
      })}
    </div>
  );
}

/*
  Quando usar useMemo

  1. Cálculos pesados
  2. Quando passa aquela informação para um componente filho, a propriedade não muda por causa do useMemo e dessa forma não causa uma renderização desnecessária.
  
*/
