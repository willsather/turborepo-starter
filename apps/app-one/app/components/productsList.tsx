import { type ProductService, type Product } from "@repo/commerce";

export default async function ProductList({ productService }: { productService: ProductService }) {
  // NOTE: this component ONLY depends on the port
  const products = await productService.getProducts();

  return (
    <>
      <h2>Products</h2>

      {products.map((product: Product) => (
        <div key={product.id}>
          <h5>{product.title}</h5>
          <p>{product.id}</p>
        </div>
      ))}
    </>
  );
}
