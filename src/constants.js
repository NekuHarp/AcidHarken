export const ACID_COLLECTION = Object.freeze({
    A: {
        value: "A",
        label: "Ala",
        weight: 0.176,
    },
    R: {
        value: "R",
        label: "Arg",
        weight: 0.185,
    },
    N: {
        value: "N",
        label: "Asn",
        weight: 0.189,
    },
    D: {
        value: "D",
        label: "Asp",
        weight: 0.19,
    },
    C: {
        value: "C",
        label: "Cys",
        weight: 0.191,
    },
    Q: {
        value: "Q",
        label: "Gln",
        weight: 0.181,
    },
    E: {
        value: "E",
        label: "Glu",
        weight: 0.19,
    },
    G: {
        value: "G",
        label: "Gly",
        weight: 0.175,
    },
    H: {
        value: "H",
        label: "His",
        weight: 0.194,
    },
    I: {
        value: "I",
        label: "Ile",
        weight: 0.18,
    },
    L: {
        value: "L",
        label: "Leu",
        weight: 0.181,
    },
    K: {
        value: "K",
        label: "Lys",
        weight: 0.187,
    },
    M: {
        value: "M",
        label: "Met",
        weight: 0.183,
    },
    F: {
        value: "F",
        label: "Phe",
        weight: 0.187,
    },
    P: {
        value: "P",
        label: "Pro",
        weight: 0.177,
    },
    S: {
        value: "S",
        label: "Ser",
        weight: 0.18,
    },
    T: {
        value: "T",
        label: "Thr",
        weight: 0.181,
    },
    W: {
        value: "W",
        label: "Trp",
        weight: 0.277,
    },
    Y: {
        value: "Y",
        label: "Tyr",
        weight: 0.229,
    },
    V: {
        value: "V",
        label: "Val",
        weight: 0.178,
    },
});

export const INPUT_VALIDATION = Object.freeze({
    REQUIRED: "This field is required.",
    REQUIRED_SHORT: "Required.",
    INVALID: "This input is invalid.",
    INVALID_SHORT: "Invalid.",
    EMAIL_INVALID: "Please enter only valid email handles.",
    INVALID_DATE: "Invalid date.",
    MAX_START_DATE_ERROR: "Starting date cannot exceed ending date.",
    MIN_END_DATE_ERROR: "Ending date cannot precede starting date.",
    ZERO_DATE_COUNT_ERROR: "Date count cannot be 0.",
    POSITIVE: "Must be positive.",
    NON_NEGATIVE: "Must not be negative.",
    LESS_THAN_A_HUNDRED: "Must be less than 100.",
    DEGREE_INVALID: "Must be between 0 and 360.",
    LATITUDE_INVALID: "Must be between -90 and 90.",
    LONGITUDE_INVALID: "Must be between -180 and 180.",
    MISSING_DATA:
        "The form is missing either CSV data, the field map, or both.",
    DUPLICATE_UNIQUE_FIELDS:
        "Some unique properties are duplicated. Make sure plot_id is unique for each plot.",
});
