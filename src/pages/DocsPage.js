import React from "react";
import { Box, Container, Typography, Paper, List, ListItemButton, ListItemText, Divider } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Link } from "react-scroll";

const DocsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ display: "flex", py: 6 }}>
      
      {/* Sidebar Navigation */}
      <Box sx={{ width: "280px", position: "sticky", top: "80px", height: "100vh", overflowY: "auto", pr: 4 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>Documentation</Typography>
        <Divider sx={{ mb: 2 }} />
        <List>
          {[
            "overview", 
            "features", 
            "compatibility", 
            "system-requirements", 
            "installation", 
            "usage-guide", 
            "best-practices",
            "conclusion"
          ].map((section) => (
            <ListItemButton key={section} component={Link} to={section} smooth={true} duration={500}>
              <ListItemText primary={section.replace("-", " ")} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      {/* Main Documentation Content */}
      <Box sx={{ flex: 1 }}>
        
        {/* Overview */}
        <Typography id="overview" variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
          Nail Disease Identification SDK for iOS
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          The <strong>Nail Disease Identification SDK</strong> is a powerful AI-driven solution designed for **real-time nail disease detection** on iOS devices.  
          It integrates **TensorFlow Lite (TFLite)** for **on-device processing** to deliver **instant results with high accuracy**.
        </Typography>

        {/* Features */}
        <Typography id="features" variant="h5" fontWeight="bold" sx={{ mt: 6, mb: 2 }}>Key Features</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          - **Detects multiple diseases:** Acral Lentiginous Melanoma, Pitting, Clubbing, Onychogryphosis, and more.  
          - **Real-time analysis:** AI-powered processing for **instant results**.  
          - **Offline support:** Works without an internet connection.  
          - **Privacy-first:** Image processing happens entirely **on-device**.  
          - **Optimized for iOS:** Swift integration via **Swift Package Manager**.  
        </Typography>

        {/* Compatibility */}
        <Typography id="compatibility" variant="h5" fontWeight="bold" sx={{ mt: 6, mb: 2 }}>Compatibility</Typography>
        <Typography variant="body1">
          - **iOS Version:** 13.0 or later  
          - **Programming Language:** Swift  
          - **Integration Method:** Swift Package Manager / CocoaPods  
        </Typography>

        {/* System Requirements */}
        <Typography id="system-requirements" variant="h5" fontWeight="bold" sx={{ mt: 6, mb: 2 }}>System Requirements</Typography>
        <Typography variant="body1">
          - **iOS Version:** iOS 13.0+  
          - **Xcode Version:** 12.0 or later  
          - **Swift Version:** 5.3 or later  
          - **Memory Requirement:** Minimum 2GB RAM (recommended 4GB for optimal performance)  
        </Typography>

        {/* Installation */}
        <Typography id="installation" variant="h5" fontWeight="bold" sx={{ mt: 6, mb: 2 }}>Installation</Typography>
        <Paper elevation={3} sx={{ p: 2, borderRadius: "10px", mb: 2 }}>
          <SyntaxHighlighter language="text" style={dracula}>
            {`https://github.com/piumal96/NailDiseaseSDK-IOS/`}
          </SyntaxHighlighter>
        </Paper>

        <Typography variant="body1">Install TensorFlow Lite dependency:</Typography>
        <Paper elevation={3} sx={{ p: 2, borderRadius: "10px", mb: 2 }}>
          <SyntaxHighlighter language="swift" style={dracula}>
            {`pod 'TensorFlowLiteSwift'`}
          </SyntaxHighlighter>
        </Paper>

        {/* Usage Guide */}
        <Typography id="usage-guide" variant="h5" fontWeight="bold" sx={{ mt: 6, mb: 2 }}>Usage Guide</Typography>

        <Typography variant="h6" fontWeight="bold">Step 1: Import the SDK</Typography>
        <Paper elevation={3} sx={{ p: 2, borderRadius: "10px", mb: 2 }}>
          <SyntaxHighlighter language="swift" style={dracula}>
            {`import NailDiseaseSDK`}
          </SyntaxHighlighter>
        </Paper>

        <Typography variant="h6" fontWeight="bold">Step 2: Initialize the Classifier</Typography>
        <Paper elevation={3} sx={{ p: 2, borderRadius: "10px", mb: 2 }}>
          <SyntaxHighlighter language="swift" style={dracula}>
            {`let classifier = NailDiseaseClassifier()`}
          </SyntaxHighlighter>
        </Paper>

        <Typography variant="h6" fontWeight="bold">Step 3: Preprocess Image Data</Typography>
        <Paper elevation={3} sx={{ p: 2, borderRadius: "10px", mb: 2 }}>
          <SyntaxHighlighter language="swift" style={dracula}>
            {`guard let inputData = TFLiteImageProcessor.preprocessImage(image) else {
    print("Image preprocessing failed.")
    return
}`}
          </SyntaxHighlighter>
        </Paper>

        <Typography variant="h6" fontWeight="bold">Step 4: Run Disease Analysis</Typography>
        <Paper elevation={3} sx={{ p: 2, borderRadius: "10px", mb: 2 }}>
          <SyntaxHighlighter language="swift" style={dracula}>
            {`classifier.analyzeNail(imageData: inputData)`}
          </SyntaxHighlighter>
        </Paper>

        <Typography variant="h6" fontWeight="bold">Step 5: Retrieve Diagnosis Result</Typography>
        <Paper elevation={3} sx={{ p: 2, borderRadius: "10px", mb: 2 }}>
          <SyntaxHighlighter language="swift" style={dracula}>
            {`let result = classifier.getDiagnosis()
print("Diagnosis Result: \\(result)")`}
          </SyntaxHighlighter>
        </Paper>

        {/* Best Practices */}
        <Typography id="best-practices" variant="h5" fontWeight="bold" sx={{ mt: 6, mb: 2 }}>Best Practices</Typography>
        <Typography variant="body1">
          - Ensure images have **proper lighting** for optimal results.  
          - Use **high-resolution images** for better accuracy.  
          - Validate image input before running analysis.  
          - Keep the SDK updated to benefit from **performance improvements**.  
        </Typography>

        {/* Conclusion */}
        <Typography id="conclusion" variant="h5" fontWeight="bold" sx={{ mt: 6, mb: 2 }}>Conclusion</Typography>
        <Typography variant="body1">
          The **Nail Disease Identification SDK** provides an easy-to-use **AI-based diagnostic tool** for **nail disease detection**.  
          With its **fast processing**, **privacy-first approach**, and **real-time analysis**, this SDK is a powerful solution for iOS healthcare applications.
        </Typography>

      </Box>
    </Container>
  );
};

export default DocsPage;
