import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function TypographyUsage() {
  return (
    <Box>
      <Typography variant="h1" color="error" noWrap gutterBottom>
        Heading 1 paragraf alt satıra geçmez.yarıda kesilir.
      </Typography>
      <Typography variant="h2" gutterBottom>
        Heading 2
      </Typography>
      <Typography variant="h4" gutterBottom>
        Heading 4
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        suptitle 1
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        suptitle 2
      </Typography>
      <Typography variant="body1" gutterBottom>
        body 1
      </Typography>
      <Typography variant="body2" gutterBottom>
        body 2
      </Typography>
      <Typography variant="button" gutterBottom>
        button
      </Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h1 etiketi kullanır ama h4 görünümündedir
      </Typography>
    </Box>
  );
}
