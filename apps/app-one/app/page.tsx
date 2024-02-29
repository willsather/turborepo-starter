import { CustomProductService, type ProductService } from "@repo/commerce";
import ProductList from "./components/productsList";

export default function Page(): JSX.Element {
  // NOTE: this component depends on BOTH the port and the adapter
  const customProductService: ProductService = new CustomProductService();

  return (
    <div>
      <h1>Application #1</h1>
      <p>Example next.js app router application</p>
      <br />
      <br />
      <br />
      <br />
      <br />

      <ProductList productService={customProductService} />
    </div>
  );
}
