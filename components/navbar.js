import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Popover,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box,
} from "@mui/material";
import { useState } from "react";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import BugReportIcon from "@mui/icons-material/BugReport";
import BuildIcon from "@mui/icons-material/Build";
import StorageIcon from "@mui/icons-material/Storage";
import WorkIcon from "@mui/icons-material/Work";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import BusinessIcon from "@mui/icons-material/Business";
import ComputerIcon from "@mui/icons-material/Computer";
import BrushIcon from "@mui/icons-material/Brush";
import WebIcon from "@mui/icons-material/Web";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import CampaignIcon from "@mui/icons-material/Campaign";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";

export default function CustomNavbar() {
  const [anchorElIT, setAnchorElIT] = useState(null);
  const [anchorElTraining, setAnchorElTraining] = useState(null);
  const [anchorElConsulting, setAnchorElConsulting] = useState(null);
  const [anchorElFreelancing, setAnchorElFreelancing] = useState(null);

  const [isITOpen, setIsITOpen] = useState(false);
  const [isTrainingOpen, setIsTrainingOpen] = useState(false);
  const [isConsultingOpen, setIsConsultingOpen] = useState(false);
  const [isFreelancingOpen, setIsFreelancingOpen] = useState(false);

  // Handle IT Services Popover
  const handleITPopoverOpen = (event) => {
    setAnchorElIT(event.currentTarget);
    setIsITOpen(!isITOpen);
  };

  const handleITPopoverClose = () => {
    setAnchorElIT(null);
    setIsITOpen(false);
  };

  // Handle Training Popover
  const handleTrainingPopoverOpen = (event) => {
    setAnchorElTraining(event.currentTarget);
    setIsTrainingOpen(!isTrainingOpen);
  };

  const handleTrainingPopoverClose = () => {
    setAnchorElTraining(null);
    setIsTrainingOpen(false);
  };

  // Handle Consulting Popover
  const handleConsultingPopoverOpen = (event) => {
    setAnchorElConsulting(event.currentTarget);
    setIsConsultingOpen(!isConsultingOpen);
  };

  const handleConsultingPopoverClose = () => {
    setAnchorElConsulting(null);
    setIsConsultingOpen(false);
  };

  // Handle Freelancing Popover
  const handleFreelancingPopoverOpen = (event) => {
    setAnchorElFreelancing(event.currentTarget);
    setIsFreelancingOpen(!isFreelancingOpen);
  };

  const handleFreelancingPopoverClose = () => {
    setAnchorElFreelancing(null);
    setIsFreelancingOpen(false);
  };

  return (
    <header className="bg-blue-300">
      {/* Top bar */}
      <div className="container mx-auto flex justify-between items-center py-2 px-4 border-b-1 border-indigo-600">
        {/* Logo Section */}
        <div className="w-1/3 flex items-center justify-start">
          <img
            src="/logos/techinfologo.png"
            alt="Logo"
            className="w-32 h-20" // Adjust these dimensions as needed
          />
        </div>

        {/* Info Section with Sign In button */}
        <div className="w-2/3 flex justify-end items-center space-x-4 text-lg text-black font-medium">
          {/* Sign In Button */}
          <Link href="/">
            <a className="px-6 py-2 text-white bg-indigo-600 rounded-md">
              Sign In
            </a>
          </Link>

          {/* Theme Changer */}
          <ThemeChanger />

          {/* About and Contact Info */}
          <Link href="/aboutus">
            <a className="hover:text-blue-500">ABOUT US</a>
          </Link>
          <span>|</span>
          <span>267-969-9976</span>
          <span>|</span>
          <Link href="/contact">
            <a className="hover:text-blue-500">CONTACT US</a>
          </Link>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-blue-300">
        <div className="container mx-auto flex justify-center items-center py-2 text-lg text-black font-medium border-t-2 border-blue-400 space-x-4">
          <Link href="/">
            <a className="hover:text-blue-500">Home</a>
          </Link>
          <span>|</span>

          {/* IT Services Popover */}
          <div className="relative">
            <Box
              aria-describedby="it-services-popover"
              className="hover:text-blue-500 text-black flex items-center cursor-pointer"
              onClick={handleITPopoverOpen}
            >
              IT Services
              <ExpandMoreIcon
                sx={{
                  transform: isITOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease-in-out",
                  marginLeft: "5px",
                }}
              />
            </Box>
            <Popover
              id="it-services-popover"
              open={Boolean(anchorElIT)}
              anchorEl={anchorElIT}
              onClose={handleITPopoverClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              sx={{
                "& .MuiPaper-root": {
                  width: "250px",
                  padding: "10px",
                  marginTop: "10px",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                },
              }}
            >
              {/* IT Services List */}
              <List>
                <ListItem button component="a" href="/services/designing">
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#FF5722" }}>
                      <DesignServicesIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Designing"
                    secondary="UI/UX and graphic design"
                  />
                </ListItem>
                <ListItem button component="a" href="/services/developing">
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#2196F3" }}>
                      <CodeIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Developing"
                    secondary="Software and web development"
                  />
                </ListItem>
                <ListItem button component="a" href="/services/testing">
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#4CAF50" }}>
                      <BugReportIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Testing"
                    secondary="Software quality assurance"
                  />
                </ListItem>
                <ListItem button component="a" href="/services/maintaining">
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#FFEB3B" }}>
                      <BuildIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Maintaining"
                    secondary="System and server maintenance"
                  />
                </ListItem>
              </List>
            </Popover>
          </div>

          <span>|</span>

          {/* Training Popover */}
          <div className="relative">
            <Box
              aria-describedby="training-popover"
              className="hover:text-blue-500 text-black flex items-center cursor-pointer"
              onClick={handleTrainingPopoverOpen}
            >
              Trainings
              <ExpandMoreIcon
                sx={{
                  transform: isTrainingOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease-in-out",
                  marginLeft: "5px",
                }}
              />
            </Box>
            <Popover
              id="training-popover"
              open={Boolean(anchorElTraining)}
              anchorEl={anchorElTraining}
              onClose={handleTrainingPopoverClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              sx={{
                "& .MuiPaper-root": {
                  width: "250px",
                  padding: "10px",
                  marginTop: "10px",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                },
              }}
            >
              {/* Training List */}
              <List>
                <ListItem button component="a" href="/training/manual-testing">
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#FF9800" }}>
                      <BugReportIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Manual Testing"
                    secondary="Test strategies and procedures"
                  />
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="/training/accessibility-testing"
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#FF9800" }}>
                      <BugReportIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Accessibility Testing"
                    secondary="Inclusive design strategies"
                  />
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="/training/automation-testing"
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#FF9800" }}>
                      <StorageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Automation Testing"
                    secondary="Automated testing frameworks"
                  />
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="/training/freelancing-career"
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#FF9800" }}>
                      <WorkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Freelancing Career"
                    secondary="Start your freelancing journey"
                  />
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="/training/server-implementation-testing"
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#FF9800" }}>
                      <ComputerIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Server Implementation & Testing"
                    secondary="Server deployment strategies"
                  />
                </ListItem>
              </List>
            </Popover>
          </div>

          <span>|</span>

          {/* Consulting Popover */}
          <div className="relative">
            <Box
              aria-describedby="consulting-popover"
              className="hover:text-blue-500 text-black flex items-center cursor-pointer"
              onClick={handleConsultingPopoverOpen}
            >
              Consulting
              <ExpandMoreIcon
                sx={{
                  transform: isConsultingOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s ease-in-out",
                  marginLeft: "5px",
                }}
              />
            </Box>
            <Popover
              id="consulting-popover"
              open={Boolean(anchorElConsulting)}
              anchorEl={anchorElConsulting}
              onClose={handleConsultingPopoverClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              sx={{
                "& .MuiPaper-root": {
                  width: "250px",
                  padding: "10px",
                  marginTop: "10px",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                },
              }}
            >
              {/* Consulting List */}
              <List>
                <ListItem button component="a" href="/consulting/it-career">
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#4CAF50" }}>
                      <BusinessIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="IT Industries Career"
                    secondary="Technology sector opportunities"
                  />
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="/consulting/banking-sectors"
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#4CAF50" }}>
                      <BusinessIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Banking Sectors"
                    secondary="Consulting for finance and banking"
                  />
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="/consulting/insurance-fields"
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#4CAF50" }}>
                      <BusinessIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Insurance Fields"
                    secondary="Insurance industry insights"
                  />
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="/consulting/medical-departments"
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#E91E63" }}>
                      <MedicalServicesIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Medical Departments"
                    secondary="Healthcare consulting services"
                  />
                </ListItem>
                <ListItem button component="a" href="/consulting/manufacturer">
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#4CAF50" }}>
                      <BusinessIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Manufacturer"
                    secondary="Manufacturing industry consulting"
                  />
                </ListItem>
              </List>
            </Popover>
          </div>

          <span>|</span>

          {/* Freelancing Popover */}
          <div className="relative">
            <Box
              aria-describedby="freelancing-popover"
              className="hover:text-blue-500 text-black flex items-center cursor-pointer"
              onClick={handleFreelancingPopoverOpen}
            >
              Freelancing
              <ExpandMoreIcon
                sx={{
                  transform: isFreelancingOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s ease-in-out",
                  marginLeft: "5px",
                }}
              />
            </Box>
            <Popover
              id="freelancing-popover"
              open={Boolean(anchorElFreelancing)}
              anchorEl={anchorElFreelancing}
              onClose={handleFreelancingPopoverClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              sx={{
                "& .MuiPaper-root": {
                  width: "250px",
                  padding: "10px",
                  marginTop: "10px",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                },
              }}
            >
              {/* Freelancing List */}
              <List>
                <ListItem
                  button
                  component="a"
                  href="/freelancing/graphic-design"
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#FF5722" }}>
                      <BrushIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Graphic Design"
                    secondary="Creative designs and logos"
                  />
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="/freelancing/web-development"
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#2196F3" }}>
                      <WebIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Web Design & Development"
                    secondary="Modern websites and apps"
                  />
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="/freelancing/content-writing"
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#4CAF50" }}>
                      <TextFieldsIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Content Writing"
                    secondary="SEO-friendly content"
                  />
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="/freelancing/content-marketing"
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#FFEB3B" }}>
                      <CampaignIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Content Marketing"
                    secondary="Strategies to grow online presence"
                  />
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="/freelancing/social-media-management"
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#3F51B5" }}>
                      <CameraAltIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Social Media Management"
                    secondary="Manage and grow social media"
                  />
                </ListItem>
                <ListItem button component="a" href="/freelancing/data-entry">
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#9C27B0" }}>
                      <DataUsageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Data Entry"
                    secondary="Data input and processing"
                  />
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="/freelancing/audio-video-production"
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#E91E63" }}>
                      <AudiotrackIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Audio & Video Production"
                    secondary="High-quality production services"
                  />
                </ListItem>
              </List>
            </Popover>
          </div>
        </div>
      </nav>
    </header>
  );
}
