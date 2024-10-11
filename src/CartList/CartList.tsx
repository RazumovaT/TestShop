import { ProductCard } from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export const CartList: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart?.items || []);

  //код для получения данных о товарах через api, если было бы возможно..

  // const [cartId, setCartId] = useState<number | null>(null);

  // useEffect(() => {
  //   const storedCartId = localStorage.getItem("cartId");
  //   if (storedCartId) {
  //     setCartId(Number(storedCartId));
  //   }
  // }, []);

  // const {
  //   data: cart,
  //   isLoading: cartLoading,
  //   error: cartError,
  // } = useGetSingleCartQuery(cartId || 0, {
  //   skip: cartId === null,
  // });

  // const { data: products } = useGetProductsQuery();

  // const productsMap = products?.reduce((acc, product) => {
  //   return {
  //     ...acc,
  //     [product.id]: product,
  //   };
  // }, {} as Record<number, SingleProduct>);

  // const cartItems =
  //   cart?.products
  //     ?.map((item) => ({
  //       ...productsMap?.[item.productId],
  //       quantity: item.quantity,
  //     }))
  //     .filter(
  //       (item): item is SingleProduct & { quantity: number } => item !== null
  //     ) || [];

  // if (cartLoading) return <p>Загрузка корзины...</p>;
  // if (cartError) return <p>Ошибка при загрузке корзины</p>;

  // if (!cart || cart.products.length === 0) {
  //   return <div>Корзина пуста.</div>;
  // }

  if (!cartItems || cartItems.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#92a8d1",
          fontSize: "30px",
          marginTop: "50px",
        }}
      >
        Корзина пуста
      </div>
    );
  }

  return (
    <main
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {cartItems?.map((item: any) => (
        <ProductCard
          key={item.product.id}
          item={item.product}
          quantity={item.quantity}
        />
      ))}
    </main>
  );
};
