import React, { useEffect } from "react";
import axios from "axios";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Paper,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button,
  CardActions,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../Store/Actions";
import { removeSelectedProduct } from "../Store/Actions/ProductAction";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: " 50px auto",
    height: "550px",
    width: "80%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "30%",
  },
  image: {
    width: "10px",
  },
}));

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(err));
    dispatch(selectedProduct(response.data));
  };

  const { image, title, price, category, description } = product;

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const classes = useStyles();
  const theme = useTheme();

  return (
    <Paper elevation={3} className={classes.root}>
      {Object.keys(product).length === 0 ? (
        <div class="text-center" style={{position:"absolute", top:"50%", left: "50%", transform: "translate(-50%,-50%)"}} >
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h4" variant="h4">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {category}
            </Typography>
            <br />
            <Button variant="outlined" color="primary">
              ${price}
            </Button>
            <br />
            <br />
            <br />
            <br />
            <Typography variant="p" color="textSecondary">
              {description}
            </Typography>
            <br />
            <br />
            <br />
            <Button variant="contained" color="secondary">
              Add to cart
            </Button>
          </CardContent>
        </div>
      )}
      <CardMedia
        className={classes.cover}
        image={image}
        title="Live from space album cover"
      />
    </Paper>
  );
};

export default ProductDetails;
