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
                (letter) => letter.toUpperCase() === character.toUpperCase(),
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
        <Box sx={{ width: "100%" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack direction={"row"} spacing={1} sx={{ width: "100%" }}>
                    <Stack
                        spacing={1}
                        sx={{ p: 2, flex: 1, minWidth: 200 }}
                        alignItems="stretch"
                    >
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
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSubmit(onSubmit)();
                                }
                            }}
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
                    <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ borderRightWidth: 3 }}
                    />
                    <Stack spacing={1} sx={{ p: 2, flex: 2 }}>
                        <Box>
                            <Typography variant="h5">Output</Typography>
                            <Divider />
                        </Box>

                        <Stack justifyContent="space-between" alignItems="center">
                            <Card sx={{ minHeight: 64, width: 300 }}>
                                <Typography fontWeight="bold">
                                    Indice de réfraction
                                </Typography>
                                <Typography sx={{ mt: 0.5 }}>
                                    {finalResultWatch ? finalResultWatch : "-"}
                                </Typography>
                            </Card>
                        </Stack>

                        <Box>
                            <Typography variant="h5">Details</Typography>
                            <Divider />
                        </Box>

                        <Grid container justifyContent="center" spacing={1}>
                            {Object.entries(ACID_COLLECTION).map(
                                ([key, acid]) => {
                                    const found = percentsWatch.find(
                                        (p) => p.key === key,
                                    );
                                    return (
                                        <Grid size={3} key={key}>
                                            <Card
                                                sx={{
                                                    minHeight: 64,
                                                    ...(!found && {
                                                        opacity: 0.4,
                                                        bgcolor:
                                                            "action.disabledBackground",
                                                    }),
                                                }}
                                            >
                                                <Typography fontWeight="bold">
                                                    {acid.label}
                                                </Typography>
                                                <Typography sx={{ mt: 0.5 }}>
                                                    {found
                                                        ? `${(
                                                              found.percent *
                                                              100
                                                          ).toFixed(2)}%`
                                                        : "-"}
                                                </Typography>
                                            </Card>
                                        </Grid>
                                    );
                                },
                            )}
                        </Grid>
                    </Stack>
                </Stack>
            </form>
        </Box>
    );
}
