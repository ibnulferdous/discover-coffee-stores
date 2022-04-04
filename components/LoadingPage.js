import { Box, CircularProgress } from "@mui/material";

const LoadingPage = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    </>
  );
};

export default LoadingPage;
