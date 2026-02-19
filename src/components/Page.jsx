import { Box } from "@mui/material";
import { forwardRef } from "react";

const Page = forwardRef(({ children }, ref) => (
    <Box
        ref={ref}
        sx={{
            width: "1",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
        }}
    >
        {children}
    </Box>
));

export default Page;
