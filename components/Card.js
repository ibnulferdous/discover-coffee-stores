import Link from "next/link";
import Image from "next/image";

import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Card = (props) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <article>
        <Link href={props.href}>
          <a>
            <Paper variant="outlined" sx={{ padding: "15px" }}>
              <Typography variant="h6" gutterBottom component="div">
                {props.name}
              </Typography>
              <Box>
                <Image
                  src={
                    props.imgUrl ||
                    "https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  }
                  alt={props.storeName}
                  width="400px"
                  height="300px"
                />
              </Box>
            </Paper>
          </a>
        </Link>
      </article>
    </Grid>
  );
};

export default Card;
