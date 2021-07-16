import { Box } from "rebass/styled-components";

export const Container = ({ children }) => {
  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "1024",
        mx: "auto",
      }}
    >
      {children} 
    </Box>
  );
};
