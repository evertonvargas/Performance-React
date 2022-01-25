/* 
memo é uma função que usa por volta da exportação de um componente
Evita que se crie uma nova versão do componente se nem uma props for mudada

Fluxo do React
1. Criar nova versão do componente
2. Comparar com a versão anterior
3. Se for diferente, criar nova versão

*/

import { memo } from 'react';

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    name: string;
  }
  onAddToWishList: (id: number) => void;
}

//1 forma de usar o memo

function ProductItemComponent({product, onAddToWishList}: ProductItemProps) {
  return (
    <div>
      <p>{product.name} - <strong>{product.price}</strong></p>
      <button onClick={()=> onAddToWishList(product.id)}>Add to wishlist</button>
    </div>
  );
}

/*
  memo faz shallow compare - comparação rasa
  {} === {} -> false
  [] === [] -> false
  fizemos essa comparação para array e objeto, não ser rasa 
  só que object.is dependendo do tamanho pode consumir processamento
*/

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
});


//2 forma de usar o memo

// export const ProductItem = memo(({product}: ProductItemProps) => {
//   return (
//     <div>
//       <p>{product.name} - <strong>{product.price}</strong></p>
//     </div>
//   );
// })

/*
  Quando usar memo

  1. Componentes que renderizam frequentemente ou com as msm props
  2. Componentes que não dependem de api ou algo pra atualizar, apenas as props
  3. Componentes grandes
  
*/
