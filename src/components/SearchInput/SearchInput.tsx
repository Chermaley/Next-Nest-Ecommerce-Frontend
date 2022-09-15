import React, { useEffect, useState } from "react";
import styles from "./SearchInput.module.scss";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getProductList } from "../../store/reducers/productSlice";
import { useTypedSelector } from "../../hooks/useTypedSelectors";
import Link from "next/link";

type SearchInputPropsTypes = {
  onCloseRequested: () => void;
};

const SearchInput: React.FC<SearchInputPropsTypes> = ({ onCloseRequested }) => {
  const dispatch = useAppDispatch();
  const [term, setTerm] = useState("");
  const searchedList = useTypedSelector(
    (state) => state.product.searchedProducts
  );
  useEffect(() => {
    dispatch(getProductList({ term: "" }));
  }, [dispatch]);
  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
    dispatch(getProductList({ term: event.target.value }));
  };
  return (
    <div className={styles.overlay} onClick={onCloseRequested}>
      <div onClick={(e) => e.stopPropagation()} className={styles.content}>
        <input
          value={term}
          onChange={onSearch}
          type="text"
          placeholder="Введите название товара"
          className={styles.input}
        />
        <div className={styles.results}>
          {searchedList?.map((item) => (
            <div key={item.id} onClick={onCloseRequested}>
              <Link
                href={`/catalog/${item.id}`}
                key={item.id}
                className={styles.result}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.cross} onClick={onCloseRequested}>
        &#x2716;
      </div>
    </div>
  );
};

export default SearchInput;
