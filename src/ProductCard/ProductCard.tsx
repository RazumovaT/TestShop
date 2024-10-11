import React from "react";
import styles from "../ProductCard/ProductCard.module.css";
import { Button, Image, Divider, notification } from "antd";
import { SingleProduct } from "../types/products/productsTypes";
import {
  addToCart,
  removeFromCart,
  addPieceToCart,
  subtractPieceFromCart,
} from "../features/cartSlice";
import { useDispatch } from "react-redux";

type ProductCardProps = {
  item: SingleProduct;
  quantity?: number;
};

export const ProductCard: React.FC<ProductCardProps> = React.memo(
  ({ item, quantity }) => {
    // функция для обновления корзины через api

    // const [addProductToCart] = useAddProductToCartMutation();
    // const addToCart = async () => {
    //   const userId = 1;
    //   const date = new Date().toISOString();
    //   try {
    //     const response = await addProductToCart({
    //       userId,
    //       date,
    //       products: [{ productId: item.id, quantity: 1 }],
    //     }).unwrap();
    //     const id = String(response.id);
    //     localStorage.setItem("cartId", id);
    //     console.log(response);
    //   } catch (err) {
    //     if (err instanceof Error) {
    //       console.log(err.message);
    //     }
    //   }
    // };
    //

    const [api, contextHolder] = notification.useNotification();
    const dispatch = useDispatch();

    const openNotification = () => {
      api.info({
        message: "Added to Cart!",
        description: "Product has been added to your cart.",
        placement: "topRight",
      });
    };

    const handleRemoveItem = (id: number) => {
      dispatch(removeFromCart(id));
    };
    const handleAddToCart = (product: SingleProduct) => {
      dispatch(addToCart(product));
      openNotification();
    };
    const handleAddPieceToCart = (id: number) => {
      dispatch(addPieceToCart(id));
    };
    const handleSubtractPieceToCart = (id: number) => {
      dispatch(subtractPieceFromCart(id));
    };
    return (
      <>
        {contextHolder}
        <div key={item.id} className={styles.card}>
          <div className={styles.info}>
            <p className={styles.title}>{item.title}</p>
            {quantity && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start",
                  fontSize: "10px",
                }}
              >
                <p style={{ fontSize: "10px" }}>
                  {quantity > 1 ? `${quantity} pieces` : `${quantity} piece`}
                </p>
                <Button
                  onClick={() => handleAddPieceToCart(item.id)}
                  className={styles.quantityButton}
                >
                  +
                </Button>
                <Button
                  onClick={() => handleSubtractPieceToCart(item.id)}
                  className={styles.quantityButton}
                >
                  -
                </Button>
              </div>
            )}
            <Divider>
              <p className={styles.price}>{item.price}$</p>
            </Divider>
            <Button
              type="primary"
              className={styles.button}
              onClick={() =>
                quantity ? handleRemoveItem(item.id) : handleAddToCart(item)
              }
            >
              {quantity ? `Удалить из корзины` : `Добавить в корзину`}
            </Button>
          </div>
          <div className={styles.imageBox}>
            <Image src={item.image} className={styles.image} />
          </div>
        </div>
      </>
    );
  }
);
