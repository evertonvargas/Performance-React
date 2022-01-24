interface ProductItemProps {
  product: {
    id: number;
    price: number;
    name: string;
  }
}

export function ProductItem({product}: ProductItemProps) {
  return (
    <div>
      <p>{product.name} - <strong>{product.price}</strong></p>
    </div>
  );
}