import {
    Box,
    Button,
    Card,
    Divider,
    Grid,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useForm, useWatch } from "react-hook-form";
import CalculateIcon from "@mui/icons-material/Calculate";
import { ACID_COLLECTION, INPUT_VALIDATION } from "../../constants";

export function AcidCalculator() {
    const {
        control,
        setValue,
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
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

        setValue("percents", values);
        setValue("finalResult", finalValue.toFixed(3));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction={"row"} spacing={1} justifyContent="space-around">
                <Stack spacing={1} sx={{ p: 2 }} alignItems="stretch">
                    <Box>
                        <Typography variant="h5">Input</Typography>
                        <Divider />
                    </Box>

                    <TextField
                        id="acidChain"
                        fullWidth
                        type="text"
                        label="Séquence"
                        multiline
                        rows={16}
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
                <Stack spacing={1} sx={{ p: 2 }}>
                    <Box>
                        <Typography variant="h5">Output</Typography>
                        <Divider />
                    </Box>

                    <Stack justifyContent="space-between">
                        <Card>
                            <Typography>Indice de réfraction</Typography>

                            <Typography>
                                {finalResultWatch ? finalResultWatch : "-"}
                            </Typography>
                        </Card>
                    </Stack>

                    <Box>
                        <Typography variant="h5">Details</Typography>
                        <Divider />
                    </Box>

                    <Grid container justifyContent="center" spacing={1}>
                        {percentsWatch.map((percent) => {
                            return (
                                <Grid size={3} key={percent.key}>
                                    <Card>
                                        <Typography>{percent.label}</Typography>

                                        <Typography>
                                            {percent.percent
                                                ? `${(
                                                      percent.percent * 100
                                                  ).toFixed(2)}%`
                                                : "-"}
                                        </Typography>
                                    </Card>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Stack>
            </Stack>
        </form>
    );
}
