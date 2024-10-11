import React, { useState, useMemo, useDeferredValue } from "react";
import { Spin } from "antd";
import { ProductCard } from "../ProductCard/ProductCard";
import { InputForm } from "../Input/Input";
import { useGetProductsQuery } from "../services/api/products.api";
import { FilterBox } from "../FilterBox/FilterBox";

export const ProductList: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterTag, setFilterTag] = useState("");

  const deferredSearchValue = useDeferredValue(searchValue);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const {
    data: productList,
    isLoading,
    isError,
  } = useGetProductsQuery(filterTag);

  const filteredProducts = useMemo(() => {
    return productList?.filter((item) =>
      item.title.toLowerCase().includes(deferredSearchValue.toLowerCase())
    );
  }, [productList, deferredSearchValue]);

  if (isLoading) return <Spin fullscreen />;
  if (isError)
    return <span>Sorry, error occured! Please, try again later</span>;

  return (
    <main
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <InputForm value={searchValue} onChange={handleSearchChange} />
      <div
        style={{
          alignSelf: "flex-start",
          marginLeft: "250px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ marginTop: "20px" }}>
          {filteredProducts &&
            filteredProducts.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
        </div>
        <FilterBox filterTag={filterTag} setFilterTag={setFilterTag} />
      </div>
    </main>
  );
};
