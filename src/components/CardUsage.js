import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function CardUsage() {
  return (
    <Box maxWidth="300px">
      <Card>
        <CardMedia
          component="img"
          height="150"
          image="https://picsum.photos/150" // picsum sitesinden rastgele resim alabiliriz
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6">
            Lorem ipsum dolor sit amet.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary" /* text.secondary ile soluklaştırırız */
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ut
            ducimus, quidem a architecto eum! Magnam magni esse nemo dolor!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small"> Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
