import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

export default function SelectUsage() {
  const [city, setCity] = useState(41);

  function handleChange(e) {
    setCity(e.target.value);
  }
  return (
    // TextField bileşeni, select özelliği ile dropdown menü olarak kullanılabilir.
    // fullWidth ile Boxa verdiğimiz genişlik kadar genişler.
    // MenuItem bileşeni, select içinde kullanılacak seçenekleri temsil eder.

    <Box width="300px">
      <TextField
        label="Select City"
        value={city}
        onChange={handleChange}
        select
        fullWidth
      >
        <MenuItem value="01">Adana</MenuItem>
        <MenuItem value="34">İstanbul</MenuItem>
        <MenuItem value="35">İzmir</MenuItem>
      </TextField>
    </Box>
  );
}
