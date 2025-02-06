import React from "react";
import { Paper, Typography, Button, Link } from "@mui/material";

const PrivacyCard = () => {
  return (
    <Paper
      sx={{
        padding: 6,
        color: "white",
        backgroundColor: "#141518",
        maxWidth: 400,
        margin: "auto",
        border: "2px solid #444",
      }}
      elevation={3}
    >
      <Typography variant="h5" fontWeight="bold" mb={4}>
        Your Privacy
      </Typography>

      <Typography variant="body2" mb={4}>
        This business determines the use of personal data collected on our media
        properties and across the internet. We may collect data that you submit
        to us directly or data that we collect automatically, including from
        cookies (such as device information or IP address).
      </Typography>

      <Typography variant="body2" mb={4}>
        Please read our{" "}
        <Link href="#" color="error">
          Privacy Policy
        </Link>{" "}
        to learn about our privacy practices, or click "Your Preferences" to
        exercise control over your data.
      </Typography>

      <Button
        variant="contained"
        color="error"
        sx={{ textTransform: "none", color: "black", mb: 2 }}
        fullWidth
      >
        Accept
      </Button>

      <Button
        variant="outlined"
        color="error"
        sx={{ textTransform: "none", color: "white", borderColor: "red" }}
        fullWidth
      >
        Your Preferences
      </Button>
    </Paper>
  );
};

export default PrivacyCard;
