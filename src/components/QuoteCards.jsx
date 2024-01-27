import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Snackbar,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const QuoteCards = ({ quoteData, getQuotes, copyQuote, copyQuotes }) => {
  //stores showing of snackbar message
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  //handles close snack bar
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  //handles copy quotes and showing snackbar
  const handleCopyQuotes = () => {
    copyQuotes();
    setSnackbarOpen(true);
  };

  return (
    <Card sx={{ maxWidth: 300, margin: "auto", marginTop: 4, boxShadow: 4 }}>
      <CardContent>
        <Typography variant="h5" component="div" mb={3}>
          Quote of the Day
        </Typography>
        <Typography sx={{ fontSize: 18 }} gutterBottom>
          {quoteData.content}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Author: {quoteData.author}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "right" }}>
        <Button
          size="small"
          style={{ color: "black" }}
          onClick={handleCopyQuotes}
        >
          <ContentCopyIcon />
        </Button>
        <Button size="small" style={{ color: "black" }} onClick={getQuotes}>
          <RefreshIcon />
        </Button>
      </CardActions>

      {copyQuote && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={snackbarOpen}
          autoHideDuration={2000}
          onClose={handleSnackbarClose}
          message="Copied"
        />
      )}
    </Card>
  );
};

export default QuoteCards;
