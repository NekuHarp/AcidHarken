import { Box } from "@mui/material";
import { forwardRef } from "react";

const Page = forwardRef(({ children, title = "", ...other }, ref) => (
    <Box ref={ref} {...other}>
        {children}
    </Box>
));

export default Page;
