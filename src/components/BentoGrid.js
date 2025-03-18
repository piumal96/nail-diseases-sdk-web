import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import SpeedIcon from "@mui/icons-material/Speed";
import InsightsIcon from "@mui/icons-material/Insights";
import SecurityIcon from "@mui/icons-material/Security";
import CodeIcon from "@mui/icons-material/Code";
import MemoryIcon from "@mui/icons-material/Memory";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const features = [
  {
    title: "Blazing-Fast AI Inference",
    desc: "Experience ultra-fast disease detection powered by optimized TensorFlow Lite models. Get results in under 200ms.",
    icon: <SpeedIcon sx={{ fontSize: 100, color: "#1E88E5" }} />,
  },
  {
    title: "On-Device Real-Time Processing",
    desc: "No internet? No problem. Our AI runs directly on the device, ensuring instant results with low latency.",
    icon: <InsightsIcon sx={{ fontSize: 100, color: "#1E88E5" }} />,
  },
  {
    title: "Uncompromised Security & Privacy",
    desc: "No cloud, no external data transfers. All processing is done securely on-device, keeping user data private.",
    icon: <SecurityIcon sx={{ fontSize: 100, color: "#1E88E5" }} />,
  },
  {
    title: "Effortless Integration",
    desc: "With just 3 lines of code, Nail AI SDK integrates seamlessly into Swift and Objective-C applications.",
    icon: <CodeIcon sx={{ fontSize: 100, color: "#1E88E5" }} />,
  },
  {
    title: "Optimized for Mobile Performance",
    desc: "Low memory footprint, high efficiency. Our AI models are designed to be power-efficient for extended battery life.",
    icon: <MemoryIcon sx={{ fontSize: 100, color: "#1E88E5" }} />,
  },
  {
    title: "Regulatory-Ready & Trustworthy",
    desc: "Compliant with HIPAA & GDPR, making it ideal for healthcare and medical applications.",
    icon: <VerifiedUserIcon sx={{ fontSize: 100, color: "#1E88E5" }} />,
  },
];

const FeaturesSection = () => {
  return (
    <Box sx={{ background: "white", py: 12 }}>
      <Container>
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            fontWeight="bold" 
            textAlign="center" 
            sx={{ mb: 8, color: "#0D47A1" }}
          >
            Nail AI SDK: The Future of Medical AI
          </Typography>
        </motion.div>

        {/* Alternating Feature Blocks */}
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" },
                alignItems: "center",
                justifyContent: "space-between",
                my: 12,
                px: { xs: 2, md: 8 },
              }}
            >
              {/* Icon / Image */}
              <Box sx={{ flex: 1, textAlign: "center" }}>
                {feature.icon}
              </Box>

              {/* Text Content */}
              <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" }, px: { xs: 2, md: 6 } }}>
                <Typography variant="h3" fontWeight="bold" sx={{ color: "#0D47A1" }}>
                  {feature.title}
                </Typography>
                <Typography variant="h5" sx={{ opacity: 0.7, mt: 2 }}>
                  {feature.desc}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        ))}

        {/* Call-to-Action */}
        <Box sx={{ textAlign: "center", mt: 10 }}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              sx={{
                background: "#0D47A1",
                fontSize: "1.5rem",
                fontWeight: "bold",
                padding: "16px 40px",
                borderRadius: "50px",
                "&:hover": { background: "#0B3D91" }
              }}
              href="/docs"
            >
              Get Started →
            </Button>
          </motion.div>
        </Box>

      </Container>
    </Box>
  );
};

export default FeaturesSection;
