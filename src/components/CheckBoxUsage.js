import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function CheckBoxUsage() {
  const [value, setValue] = useState(true);
  const [skills, setSkills] = useState([]);

  function handleChange(e) {
    setValue(e.target.checked);
  }

  function handleSkillsChange(e) {
    const skill = e.target.value;
    if (skills.includes(skill)) {
      setSkills(skills.filter((s) => s !== skill));
    } else {
      setSkills([...skills, skill]);
    }
  }

  console.log("skills", skills);

  return (
    <>
      <Box>
        <FormControlLabel
          label="Kullanım koşulları"
          control={<Checkbox checked={value} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          //icon = seçili değilken gösterilecek icon checkedIcon = seçili iken gösterilecek icon
          icon={<FavoriteBorderIcon />}
          checkedIcon={<FavoriteIcon color="success" />}
          checked={value}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Yetenekler</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              control={<Checkbox value="html" />}
              checked={skills.includes("html")}
              onChange={handleSkillsChange}
            ></FormControlLabel>
            <FormControlLabel
              label="JavaScript"
              control={<Checkbox value="javascript" />}
              checked={skills.includes("javascript")}
              onChange={handleSkillsChange}
            ></FormControlLabel>
            <FormControlLabel
              label="Css"
              control={<Checkbox value="css" />}
              checked={skills.includes("css")}
              onChange={handleSkillsChange}
            ></FormControlLabel>
          </FormGroup>
        </FormControl>
      </Box>
    </>
  );
}
