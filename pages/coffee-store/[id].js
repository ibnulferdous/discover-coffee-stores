import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

import {
  Avatar,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import RoomIcon from "@mui/icons-material/Room";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import { fetchCoffeeStores } from "../../lib/coffee-stores";
import LoadingPage from "../../components/LoadingPage";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../_app";
import { isEmpty } from "../../utils";

const CoffeeStore = (initialProps) => {
  const router = useRouter();
  const {
    state: { coffeeStores },
  } = useContext(StoreContext);
  const [coffeeStore, setCoffeeStore] = useState(initialProps.coffeeStoreData);
  const { name, imgUrl, location } = coffeeStore;
  console.log(coffeeStore);

  const id = router.query.id;

  useEffect(() => {
    if (isEmpty(initialProps.coffeeStoreData)) {
      if (coffeeStores.length > 0) {
        const findCoffeeStoresById = coffeeStores.find((coffeeStore) => {
          return coffeeStore.fsq_id.toString() === id;
        });
        setCoffeeStore(findCoffeeStoresById);
      }
    }
  }, [id]);

  const handleUpVoteButton = () => {
    console.log("Upvote Clicked!");
  };

  if (router.isFallback) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>

      <Container maxWidth="lg" sx={{ paddingY: "100px" }}>
        <Box sx={{ marginBottom: "50px" }}>
          <Link href="/">
            <a>
              <Button variant="outlined">Back Home</Button>
            </a>
          </Link>
        </Box>

        <Grid container spacing={8}>
          <Grid item xs={12} sm={6}>
            <Box>
              <Image
                src={
                  imgUrl ||
                  "https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                }
                alt={name}
                width="600px"
                height="450px"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 700 }}>
              {name}
            </Typography>

            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                marginBottom: "25px",
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: "#9e9e9e" }}>
                    <RoomIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={location?.formatted_address}
                  secondary={location?.country}
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: "#9e9e9e" }}>
                    <ThumbUpIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="1" />
              </ListItem>
            </List>

            <Button variant="contained" onClick={handleUpVoteButton}>
              Up Vote!
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export async function getStaticPaths() {
  const coffeeStoresData = await fetchCoffeeStores();

  const paths = coffeeStoresData.map((singleStore) => {
    return {
      params: {
        id: singleStore.fsq_id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: "blocking", // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const coffeeStoresData = await fetchCoffeeStores();
  const findCoffeeStoresById = coffeeStoresData.find((coffeeStore) => {
    return coffeeStore.fsq_id.toString() === params.id;
  });

  return {
    props: {
      coffeeStoreData: findCoffeeStoresById ? findCoffeeStoresById : {},
    },
  };
}

export default CoffeeStore;
