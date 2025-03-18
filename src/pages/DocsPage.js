import React from 'react';
import { Box, Container, Typography, Paper, List, ListItemButton, ListItemText, Divider, Button } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from 'react-scroll';

const SDK_VERSION = "NailDiseaseSDK Release 1.3.0 - Latest";

const CopyButton = ({ textToCopy }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert('Code copied to clipboard!');
    });
  };

  return (
    <Button onClick={handleCopy} variant="outlined" size="small" sx={{ ml: 1 }}>Copy</Button>
  );
};

const DocsPage = () => {
  const sections = [
    'Overview',
    'Features',
    'Compatibility',
    'System requirements',
    'Installation',
    'Usage guide',
    'Conclusion',
    'Tips'
  ];

  const codeBlocks = {
    installCommand: 'https://github.com/piumal96/NailDiseaseSDK-IOS/',
    podInstall: "pod 'TensorFlowLiteSwift'",
    cloneSampleApp: 'git clone https://github.com/piumal96/NailDisease',
    importSDK: 'import NailDiseaseSDK',
    initializeClassifier: 'let classifier = NailDiseaseClassifier()',
    preprocessImage: `guard let inputData = TFLiteImageProcessor.preprocessImage(image) else {
      print("Image preprocessing failed.")
      return
    }`,
    analyzeNail: 'classifier.analyzeNail(imageData: inputData)',
    getResult: `let result = classifier.getDiagnosis()
print("Diagnosis Result: \\(result)")`
  };

  return (
    <Container maxWidth="lg" sx={{ display: 'flex', py: 6 }}>
      {/* Sidebar Navigation */}
      <Box sx={{ width: '280px', position: 'sticky', top: '80px', height: '100vh', overflowY: 'auto', pr: 4 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>Documentation</Typography>
        <Divider sx={{ mb: 2 }} />
        <List>
          {sections.map((section) => (
            <ListItemButton key={section} component={Link} to={section} smooth={true} duration={500}>
              <ListItemText primary={section.replace('-', ' ')} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1 }}>
        {/* SDK Version */}
        <Typography variant="h5" fontWeight="bold" color="primary" sx={{ mb: 2 }}>
          {SDK_VERSION}
        </Typography>

        <Typography id="overview" variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
          Nail Disease Identification SDK for iOS
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          The Nail Disease Identification SDK is an AI-powered tool designed for real-time nail disease detection on iOS devices.
          It integrates TensorFlow Lite for high-accuracy on-device processing.
        </Typography>

        {/* Features */}
        <Typography id="features" variant="h5" fontWeight="bold" sx={{ mt: 6, mb: 2 }}>
  🔑 Key Features
</Typography>
<ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
  <li>🩺 <strong>Detects Multiple Diseases</strong>: Acral Lentiginous Melanoma, Blue Finger, Clubbing, Healthy Nail, Onychogryphosis, Pitting.</li>
  <li>⚡ <strong>Real-time Processing</strong>: Instant AI-based nail disease analysis.</li>
  <li>🤖 <strong>TensorFlow Lite Optimized</strong>: Efficient ML inference on iOS.</li>
  <li>🔒 <strong>Privacy-First</strong>: Runs fully on-device, no internet needed.</li>
  <li>🔗 <strong>Seamless Integration</strong>: Swift Package Manager support.</li>
</ul>


        {/* Compatibility */}
        <Typography id="compatibility" variant="h5" fontWeight="bold" sx={{ mt: 6, mb: 2 }}>
  🔄 Compatibility
</Typography>
<ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
  <li>📱 <strong>iOS Version</strong>: 13.0+</li>
  <li>💻 <strong>Programming Language</strong>: Swift</li>
  <li>🔗 <strong>Integration</strong>: Swift Package Manager (SPM)</li>
</ul>


        {/* System Requirements */}
        <Typography id="system-requirements" variant="h5" fontWeight="bold" sx={{ mt: 6, mb: 2 }}>
  ⚙️ System Requirements
</Typography>
<ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
  <li>📱 <strong>iOS Version</strong>: iOS 13.0+</li>
  <li>🛠️ <strong>Xcode Version</strong>: 12.0 or later</li>
  <li>💻 <strong>Swift Version</strong>: 5.3+</li>
</ul>


        {/* Installation */}
        <Typography id="installation" variant="h5" fontWeight="bold" sx={{ mt: 6, mb: 2 }}>Installation</Typography>
        <Typography variant="body1">To integrate the SDK, add the repository as a dependency:</Typography>
        <Paper sx={{ p: 2, borderRadius: '10px', mb: 2, display: 'flex', alignItems: 'center' }}>
          <SyntaxHighlighter language="text" style={dracula}>
            {codeBlocks.installCommand}
          </SyntaxHighlighter>
          <CopyButton textToCopy={codeBlocks.installCommand} />
        </Paper>

        <Typography variant="body1">Install TensorFlow Lite dependency:</Typography>
        <Paper sx={{ p: 2, borderRadius: '10px', mb: 2, display: 'flex', alignItems: 'center' }}>
          <SyntaxHighlighter language="swift" style={dracula}>
            {codeBlocks.podInstall}
          </SyntaxHighlighter>
          <CopyButton textToCopy={codeBlocks.podInstall} />
        </Paper>

        {/* Usage Guide */}
        <Typography id="usage-guide" variant="h5" fontWeight="bold" sx={{ mt: 6, mb: 2 }}>Usage Guide</Typography>

        {Object.entries(codeBlocks).slice(3).map(([title, code]) => (
          <Box key={title} sx={{ mb: 2 }}>
            <Typography variant="h6" fontWeight="bold">{title.replace(/([A-Z])/g, ' $1').trim()}</Typography>
            <Paper sx={{ p: 2, borderRadius: '10px', mb: 2, display: 'flex', alignItems: 'center' }}>
              <SyntaxHighlighter language="swift" style={dracula}>
                {code}
              </SyntaxHighlighter>
              <CopyButton textToCopy={code} />
            </Paper>
          </Box>
        ))}

        {/* Conclusion */}
        <Typography id="conclusion" variant="h5" fontWeight="bold" sx={{ mt: 6, mb: 2 }}>
  🎯 Conclusion
</Typography>
<Typography variant="body1">
  The <strong>NailDiseaseSDK</strong> is a powerful, AI-driven solution for real-time nail disease detection, offering **fast, accurate, and privacy-first** analysis directly on iOS devices.  
  With seamless **Swift Package Manager integration**, developers can easily embed this SDK into their applications and leverage **on-device machine learning** to deliver instant results.  
  Whether for **medical applications, research, or personal healthcare**, NailDiseaseSDK ensures efficient and secure diagnostics without requiring an internet connection.
</Typography>

        {/* Tips */}
        <Typography id="tips" variant="h5" fontWeight="bold" sx={{ mt: 6, mb: 2 }}>Tips for Best Results</Typography>
        <Typography variant="body1">
          - Ensure **clear, well-lit** nail images for best accuracy.  
          - Use **high-resolution images** to improve classification.  
          - Keep the **SDK updated** for performance enhancements.  
        </Typography>
      </Box>
    </Container>
  );
};

export default DocsPage;
