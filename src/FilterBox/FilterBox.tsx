import React from "react";
import { Card, Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import styles from "../FilterBox/FilterBox.module.css";

type FilterBoxProps = {
  filterTag: string;
  setFilterTag: (value: string) => void;
};

export const FilterBox: React.FC<FilterBoxProps> = ({
  filterTag,
  setFilterTag,
}) => {
  const checkboxValues = [
    { label: "Все категории", value: "" },
    { label: "Мужская одежда", value: "men's clothing" },
    { label: "Женская одежда", value: "women's clothing" },
    { label: "Ювелирные украшения", value: "jewelery" },
    { label: "Электроника", value: "electronics" },
  ];

  const onCategoryValueChange = (e: RadioChangeEvent) => {
    const selectedValue = e.target.value;
    setFilterTag(selectedValue);
  };

  return (
    <Card className={styles.card}>
      <Radio.Group onChange={onCategoryValueChange} value={filterTag}>
        {checkboxValues.map((item) => (
          <Radio
            value={item.value}
            className={styles.checkbox}
            key={item.label}
          >
            {item.label}
          </Radio>
        ))}
      </Radio.Group>
    </Card>
  );
};
