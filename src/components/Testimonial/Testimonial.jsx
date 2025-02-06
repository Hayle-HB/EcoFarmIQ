import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import Rating from "@mui/material/Rating";

const TestimonialCard = ({testimonialText, TestimonialName, TestimonialRating}) => {
  const [hover, setHover] = useState(false);
  return (
    <Card
      sx={{ maxWidth: 344, mx: "auto", position: "relative" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="mb-4 pb-7"
    >
      <CardMedia
        component="img"
        height="200"
        image="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
        alt="Magento Forests"
      />

      <CardContent>
        <Typography variant="h6" color="primary">
          {TestimonialName}
        </Typography>
        <Typography variant="body2">
          {testimonialText}
        </Typography>
      </CardContent>

      <CardActions sx={{ display: "flex", alignItems: "center", px: 2 }}>
        <Rating value={4} readOnly precision={0.5} />
        <Typography variant="subtitle2" color="primary" sx={{ ml: 1 }}>
          {TestimonialRating}
        </Typography>
      </CardActions>

      {hover && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(3, 99, 88, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="contained" color="secondary">
            See more info
          </Button>
        </Box>
      )}
    </Card>
  );
};

export default TestimonialCard;
