import Grid from "@mui/material/Grid";
import Card from "./Card";

import data from "../data/coffee-stores.json";

const CardListsContainer = () => {
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          marginBottom: "100px",
        }}
      >
        {data.map((coffeeStore) => (
          <Card
            key={coffeeStore.id}
            name={coffeeStore.name}
            imgUrl={coffeeStore.imgUrl}
            href={`/coffee-store/${coffeeStore.id}`}
          />
        ))}
      </Grid>
    </>
  );
};

export default CardListsContainer;
