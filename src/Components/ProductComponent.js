import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    margin: " 40px auto ",
    cursor: "pointer",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
}));

const ProductComponent = () => {
  const classes = useStyles();
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Card id={id} className={classes.root}>
        <NavLink to={`/product/${id}`}>
          <CardMedia className={classes.media} image={image} title={title} />
          <CardHeader title={title} subheader={price} />
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            ></Typography>
          </CardContent>
        </NavLink>
      </Card>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
