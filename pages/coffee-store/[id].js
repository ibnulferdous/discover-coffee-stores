import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import coffeeStoresData from "../../data/coffee-stores.json";

export function getStaticPaths() {
  const paths = coffeeStoresData.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}

export function getStaticProps({ params }) {
  return {
    props: {
      coffeeStoreData: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id;
      }),
    },
  };
}

const coffeeStore = ({ coffeeStoreData }) => {
  console.log(coffeeStoreData);

  return (
    <div>
      <Head>
        <title>{coffeeStoreData.name}</title>
      </Head>

      <Container maxWidth="lg" sx={{ paddingY: "100px" }}>
        <Box sx={{ marginBottom: "50px" }}>
          <Link href="/">
            <a>
              <Button variant="text">Back Home</Button>
            </a>
          </Link>
        </Box>

        <Grid container spacing={8}>
          <Grid item xs={12} sm={6}>
            <Box>
              <Image
                src={coffeeStoreData.imgUrl}
                alt={coffeeStoreData.name}
                width="600px"
                height="450px"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h3"
              gutterBottom
              component="h2"
              sx={{ fontWeight: 700 }}
            >
              {coffeeStoreData.name}
            </Typography>
            <Typography variant="h5" gutterBottom component="div">
              Address: {coffeeStoreData.address}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default coffeeStore;
