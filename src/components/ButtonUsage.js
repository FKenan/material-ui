import { ButtonGroup, IconButton, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ButtonUsage() {
  return (
    // Stack bileşeni, içindeki bileşenleri dikey veya yatay olarak hizalamak için kullanılır.
    // direction="row" ile yatay hizalama, spacing ile aralarındaki boşluk ayarlanır.
    // sx prop'u ile stil eklenebilir. mt ( margin-top ) ile üst boşluk eklenir. vb.
    // startIcon ve endIcon ile butonun başına ve sonuna ikon eklenebilir.
    // ArrowRightIcon, Material-UI kütüphanesinden bir ikon bileşenidir. Bu tarz ikonları Meterial-UI'dan alabiliriz.
    <>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="success"
          size="large"
          startIcon="👍"
          endIcon={<ArrowRightIcon />}
        >
          Hello world
        </Button>
        <Button variant="text">Hello world</Button>
        <Button variant="outlined">Hello world</Button>
      </Stack>
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <Button variant="contained">Hello world</Button>
        <Button variant="text">Hello world</Button>
        <Button variant="outlined">Hello world</Button>
      </Stack>

      {/* IconButton bileşeni, genellikle ikonları tıklanabilir hale getirmek için kullanılır. */}
      <div style={{ margin: "20px" }}>
        <IconButton>
          <DeleteIcon color="error" />
        </IconButton>
      </div>

      {/* ButtonGroup bileşeni, birden fazla butonu gruplayarak tek bir grup olarak görünmesini sağlar. 
          ButtonGroup a verilen parametreler tüm buttonlara uygulanır.*/}
      <ButtonGroup color="secondary" variant="contained" size="large">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  );
}
