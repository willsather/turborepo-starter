import { Product } from "./Product";

export default interface ProductService {
  getProduct: (id: string) => Promise<Product>;
  getProducts: () => Promise<Product[]>;
}
