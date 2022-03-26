import Image from "next/image";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Banner = ({ buttonText, handleOnClick }) => {
  return (
    <>
      <Grid
        container
        alignItems="center"
        spacing={2}
        sx={{
          minHeight: "40vh",
          margin: "50px 0 100px",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Typography variant="h2" component="h1" sx={{ fontWeight: 700 }}>
            Coffee Connoissure
          </Typography>
          <Typography variant="h5" component="p" sx={{ marginBottom: "25px" }}>
            Discover you local coffee stores!
          </Typography>
          <Button variant="contained" size="large" onClick={handleOnClick}>
            {buttonText}
          </Button>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <Image
            src="/static/coffee-glass.png"
            width={600}
            height={599}
            alt="Coffee Glass"
            priority
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Banner;
