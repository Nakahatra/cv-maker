import * as React from "react";
import Box from "@mui/material/Box";
import { flexbox } from "@mui/system";
// import IconButton from "@mui/material/IconButton";
// import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function InputAdornments() {
    const [values, setValues] = React.useState({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 5,
            }}
        >
            <div>
                <FormControl fullWidth sx={{ m: 1, width: "100ch" }}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                        Name
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={values.amount}
                        onChange={handleChange("amount")}
                        startAdornment={
                            <InputAdornment position="start">
                                Name
                            </InputAdornment>
                        }
                        label="Amount"
                    />
                </FormControl>
                <br />
                <TextField
                    id="outlined-basic"
                    label="Age"
                    variant="outlined"
                    sx={{ m: 1, width: "25ch" }}
                />
                <br />
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    defaultValue=""
                    sx={{ m: 1, width: "45ch" }}
                />
                <br />
                <TextField
                    id="outlined-basic"
                    label="Gmail"
                    variant="outlined"
                    sx={{ m: 1, width: "25ch" }}
                />
                <br />
                <TextField
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                    sx={{ m: 1, width: "25ch" }}
                />
                <br />
                <Button variant="contained" sx={{ m: 1 }}>
                    Submit
                </Button>
            </div>
        </Box>
    );
}
