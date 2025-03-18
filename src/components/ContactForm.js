import React from "react";
import { Box, TextField, Button, Typography, Grid, Paper, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const ContactForm = () => {
  return (
    <Box 
      sx={{ 
        background: "#E3F2FD", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        py: 8,
        px: 3 
      }}
    >
      <Paper 
        elevation={2} 
        sx={{ 
          p: 4, 
          maxWidth: "700px", 
          width: "100%", 
          borderRadius: "12px", 
          background: "white"
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Left Side: Contact Form */}
          <Grid item xs={12} md={7}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Get in Touch
            </Typography>

            <TextField 
              fullWidth 
              label="Your Name" 
              variant="outlined" 
              sx={{ mb: 2 }} 
            />

            <TextField 
              fullWidth 
              label="Your Email" 
              type="email" 
              variant="outlined" 
              sx={{ mb: 2 }} 
            />

            <TextField 
              fullWidth 
              label="Message (Optional)" 
              multiline 
              rows={3} 
              variant="outlined" 
              sx={{ mb: 2 }} 
            />

            {/* Buttons */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button 
                fullWidth 
                variant="contained" 
                sx={{ bgcolor: "#1976D2", color: "white", py: 1.2, fontSize: "0.9rem", borderRadius: "6px" }}
              >
                Send Message
              </Button>

              <Button 
                fullWidth 
                variant="outlined" 
                sx={{ borderColor: "#1976D2", color: "#1976D2", py: 1.2, fontSize: "0.9rem", borderRadius: "6px" }}
              >
                Request Demo
              </Button>
            </Box>
          </Grid>

          {/* Right Side: Contact Info & Socials */}
          <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
            <Typography variant="body1" sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
              <EmailIcon sx={{ mr: 1 }} /> kumararmjp@gmail.com
            </Typography>

            <Typography variant="body1" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <LocationOnIcon sx={{ mr: 1 }} /> Kurundupitiya, Vavuniya.
            </Typography>

            {/* Social Media Icons */}
            <Box sx={{ mt: 2 }}>
              <IconButton sx={{ color: "#1976D2" }}><YouTubeIcon /></IconButton>
              <IconButton sx={{ color: "#1976D2" }}><FacebookIcon /></IconButton>
              <IconButton sx={{ color: "#1976D2" }}><LinkedInIcon /></IconButton>
              <IconButton sx={{ color: "#1976D2" }}><TwitterIcon /></IconButton>
              <IconButton sx={{ color: "#1976D2" }}><InstagramIcon /></IconButton>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ContactForm;
