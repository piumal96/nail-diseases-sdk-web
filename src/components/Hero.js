import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";

const Hero = () => {
  return (
    <Box 
      id="hero"
      sx={{ 
        height: "85vh",
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(to bottom, #E3F2FD, #C5DFF8)",
        color: "#1A237E",
        px: 3
      }}
    >
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        style={{ width: "100%", maxWidth: "850px" }}
      >
        
        {/* Title */}
        <Typography 
          variant="h1" 
          fontWeight="bold" 
          sx={{ 
            fontSize: { xs: "2.3rem", md: "3.5rem" }, 
            lineHeight: { xs: "2.8rem", md: "4.2rem" },
            mb: 2 
          }}
        >
          AI-Powered Nail Disease SDK
        </Typography>

        {/* Description */}
        <Typography 
          variant="h6" 
          sx={{ 
            maxWidth: "750px", 
            opacity: 0.9, 
            mt: 1, 
            mx: "auto",  
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: { xs: "1.5rem", md: "1.8rem" }
          }}
        >
          Instantly detect and analyze nail diseases using AI-driven technology,  
          designed for seamless integration into healthcare applications.
        </Typography>

        {/* Buttons - Perfectly Centered */}
        <Stack 
          direction={{ xs: "column", md: "row" }} 
          spacing={3}  // Increased spacing for perfect balance
          sx={{ mt: 5, justifyContent: "center", alignItems: "center", display: "flex" }}
        >

          {/* iOS Available Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="contained" 
              sx={{ 
                borderRadius: "50px",
                padding: "14px 42px",  
                background: "#1A237E", 
                display: "flex", 
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "bold",
                boxShadow: "0px 4px 12px rgba(26, 35, 126, 0.2)",
                minWidth: "240px",
                height: "52px"
              }}
              startIcon={<AppleIcon />}
            >
              Available on iOS
            </Button>
          </motion.div>

          {/* Android Coming Soon Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="outlined" 
              sx={{ 
                borderRadius: "50px",
                padding: "14px 42px",  
                color: "#1A237E", 
                borderColor: "#1A237E",
                display: "flex", 
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "bold",
                opacity: 0.8,  
                cursor: "not-allowed",
                minWidth: "240px",
                height: "52px"
              }}
              startIcon={<AndroidIcon />}
            >
              Android Coming Soon
            </Button>
          </motion.div>

        </Stack>
      </motion.div>
    </Box>
  );
};

export default Hero;
