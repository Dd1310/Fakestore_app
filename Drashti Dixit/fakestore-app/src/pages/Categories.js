import { Container, ListItem, ListItemText } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(Categories());
  }, [dispatch]);

  return (
    <Container>
      <list>
        {categories.map((category) => (
          <ListItem
            button
            key={category}
            onClick={() => navigate(`/category/${category}`)}
          >
            <ListItemText primary={category} />
          </ListItem>
        ))}
      </list>
    </Container>
  );
};

export default Categories;
