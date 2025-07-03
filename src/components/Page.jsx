import { Box } from "@mui/material";
import { forwardRef } from "react";

const Page = forwardRef(({ children }, ref) => (
    <Box
        ref={ref}
        sx={{
            width: "1",
            height: "100vh",
        }}
    >
        {children}
    </Box>
));

export default Page;
