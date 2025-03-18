import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get the current page

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: "white", 
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",  // More refined shadow
        color: "#1A237E",
        height: "70px",
        px: 4
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", minHeight: "70px" }}>
        
        {/* ✅ Logo */}
        <Typography 
          variant="h6" 
          fontWeight="bold" 
          sx={{ 
            fontSize: "1.5rem",
            cursor: "pointer",
            "&:hover": { opacity: 0.8 }  // Subtle hover effect
          }}
        >
          Nail AI SDK
        </Typography>
        
        {/* ✅ Navigation Links */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {location.pathname === "/" ? (
            <>
              <Button 
                sx={{ 
                  color: "#1A237E", 
                  fontSize: "1rem", 
                  mx: 1, 
                  fontWeight: "500", 
                  textTransform: "none",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": { color: "#0D47A1" }  // Slight color change on hover
                }} 
                component={ScrollLink} 
                to="hero" 
                smooth={true} 
                duration={500}
              >
                Home
              </Button>

              <Button 
                sx={{ 
                  color: "#1A237E", 
                  fontSize: "1rem", 
                  mx: 1, 
                  fontWeight: "500", 
                  textTransform: "none",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": { color: "#0D47A1" }
                }} 
                component={ScrollLink} 
                to="features" 
                smooth={true} 
                duration={500}
              >
                Features
              </Button>

              <Button 
                sx={{ 
                  color: "#1A237E", 
                  fontSize: "1rem", 
                  mx: 1, 
                  fontWeight: "500", 
                  textTransform: "none",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": { color: "#0D47A1" }
                }} 
                component={ScrollLink} 
                to="contact" 
                smooth={true} 
                duration={500}
              >
                Contact
              </Button>
            </>
          ) : (
            <Button 
              sx={{ 
                color: "#1A237E", 
                fontSize: "1rem", 
                mx: 1, 
                fontWeight: "500", 
                textTransform: "none",
                transition: "all 0.3s ease-in-out",
                "&:hover": { color: "#0D47A1" }
              }} 
              component={RouterLink} 
              to="/"
            >
              Home
            </Button>
          )}

          {/* ✅ Docs Button - Always Visible */}
          <Button 
            sx={{ 
              color: "white", 
              background: "#1A237E", 
              fontSize: "1rem", 
              mx: 1, 
              fontWeight: "500", 
              textTransform: "none",
              padding: "8px 18px",
              borderRadius: "20px",  // Rounded corners
              boxShadow: "0px 4px 10px rgba(26, 35, 126, 0.2)",
              transition: "all 0.3s ease-in-out",
              "&:hover": { background: "#0D47A1" }
            }} 
            component={RouterLink} 
            to="/docs"
          >
            Docs
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
