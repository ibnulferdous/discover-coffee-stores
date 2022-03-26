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
              <Box
                sx={{ width: "100%", height: "250px", position: "relative" }}
              >
                <Image
                  src={props.imgUrl}
                  alt={props.storeName}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
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
