import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../Store/Actions";
import Grid from "@material-ui/core/Grid";

const ProductList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products: ", products);
  return (
    <>
      <Grid container >
        <Grid container item xs={12} >
          <ProductComponent />
        </Grid>
      </Grid>
    </>
  );
};

export default ProductList;
