import {
    Box,
    Button,
    Divider,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

import CalculateIcon from "@mui/icons-material/Calculate";
import { ACID_COLLECTION, INPUT_VALIDATION } from "../../constants";

export function AcidCalculator() {
    const { control, setValue, register } = useForm({
        defaultValues: {
            acidChain: "",
            percents: [],
            finalResult: null,
        },
    });

    const [percentsWatch, finalResultWatch] = useWatch({
        name: ["percents", "finalResult"],
        control,
    });

    const onSubmit = (payload) => {
        const counts = {};
        const values = [];
        let total = 0;
        let finalValue = 0;
        const allLetters = Object.keys(ACID_COLLECTION);

        [...payload.acidChain].forEach((character) => {
            const acid = allLetters.find(
                (letter) => letter.toUpperCase() === character.toUpperCase()
            );
            if (acid) {
                total++;
                if (counts[acid]) counts[acid]++;
                else counts[acid] = 1;
            }
        });

        Object.keys(counts).forEach((key) => {
            finalValue += (counts[key] / total) * ACID_COLLECTION[key].weight;
            values.push({
                key: key,
                label: ACID_COLLECTION[key].label,
                percent: counts[key] / total,
            });
        });

        if (protocolResults) {
            setValue("percents", values);
            setValue("finalResult", finalValue);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={5}>
                <Grid item xs={4}>
                    <Stack spacing={2} sx={{ p: 2 }}>
                        <Box>
                            <Typography variant="h5">Input</Typography>
                            <Divider />
                        </Box>

                        <TextField
                            id="acidChain"
                            fullWidth
                            label="Chaîne d'acides aminés"
                            error={Boolean(errors.acidChain)}
                            helperText={errors.acidChain?.message}
                            {...register("acidChain", {
                                required: INPUT_VALIDATION.REQUIRED,
                            })}
                        />

                        <Stack direction="row" justifyContent="flex-end">
                            <Button
                                variant="contained"
                                startIcon={<CalculateIcon />}
                                type="submit"
                            >
                                Calcul
                            </Button>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack spacing={2} sx={{ p: 2 }}>
                        <Box>
                            <Typography variant="h5">Output</Typography>
                            <Divider />
                        </Box>

                        <Stack direction="row" justifyContent="space-between">
                            <Typography>Indice de réfraction</Typography>

                            <Typography>
                                {finalResultWatch ? finalResultWatch : "-"}
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </form>
    );
}
