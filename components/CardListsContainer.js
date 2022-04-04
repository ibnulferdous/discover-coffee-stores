import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "./Card";

const CardListsContainer = ({ coffeeStoresData }) => {
  return (
    <>
      {coffeeStoresData.length > 0 && (
        <Typography
          variant="h3"
          marginBottom="50px"
          component="h2"
          sx={{ fontWeight: 700 }}
          align="center"
        >
          New York Shops
        </Typography>
      )}
      <Grid
        container
        spacing={3}
        sx={{
          marginBottom: "100px",
        }}
      >
        {coffeeStoresData.map((coffeeStore) => (
          <Card
            key={coffeeStore.fsq_id}
            name={coffeeStore.name}
            imgUrl={coffeeStore.imgUrl}
            href={`/coffee-store/${coffeeStore.fsq_id}`}
          />
        ))}
      </Grid>
    </>
  );
};

export default CardListsContainer;
