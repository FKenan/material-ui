import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export default function RadioButtonUsage() {
  const [value, setValue] = useState("0");

  function handleChange(e) {
    setValue(e.target.value);
  }

  // RadioGroupa row özelliği eklenirse, butonlar yan yana gelir.default olarak alt alta gelirler.
  // Radio lara color size vb özellikler eklenebilir.
  return (
    <Box>
      <FormControl>
        <FormLabel>Eğitiminiz</FormLabel>
        <RadioGroup name="egitim" onChange={handleChange} value={value} row>
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="Lise"
            value="0"
          ></FormControlLabel>
          <FormControlLabel
            control={<Radio color="danger" />}
            label="Üniversite"
            value="1"
          ></FormControlLabel>
          <FormControlLabel
            control={<Radio />}
            label="Yüksek Lisans"
            value="2"
          ></FormControlLabel>
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
