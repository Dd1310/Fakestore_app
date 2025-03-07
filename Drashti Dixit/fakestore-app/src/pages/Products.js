import {
  Card,
  Button,
  Grid2,
  Typography,
  Container,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`/https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        setProducts(res.data);
      });
  }, [category]);

  return (
    <Container>
      <Grid2 container spacing={2}>
        {products.map((product) => (
          <Grid2 item xs={12} ms={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body1">${product.price}</Typography>
                <Button variant="contained" color="primary">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};
export default Products;
