import { InputAdornment, Stack, TextField } from "@mui/material";

export default function TextFieldUsage() {
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined"></TextField>
        <TextField label="Name" variant="filled"></TextField>
        <TextField label="Name" variant="standard"></TextField>
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Name" size="small" color="secondary"></TextField>
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Name" required></TextField>
        <TextField label="Password" required></TextField>
        <TextField label="Password" required disabled></TextField>
      </Stack>

      {/* inputun başına yada sonuna sabit item verme */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Name"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            },
          }}
        ></TextField>
        <TextField
          label="Name"
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            },
          }}
        ></TextField>
      </Stack>

      {/* error ile hatalı hale getiririz. helpertext ile input altında bilgi veririz. */}
      <Stack direction="row" spacing={2}>
        <TextField label="Name" helperText="Incorrect" error></TextField>
      </Stack>
    </Stack>
  );
}
