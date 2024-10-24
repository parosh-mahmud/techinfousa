// import Link from "next/link";
// import ThemeChanger from "./DarkSwitch";
// import { Disclosure } from "@headlessui/react";
// import { Fragment, useState, useEffect } from "react";
// import { ChevronDownIcon } from "@heroicons/react/solid";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   const handleScroll = () => {
//     setIsScrolled(window.scrollY > 0);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const navigation = [
//     { name: "Home", href: "/" },
//     {
//       name: "Services",
//       submenu: [
//         { name: "Web Development", href: "/services/web-development" },
//         { name: "App Development", href: "/services/app-development" },
//         { name: "SEO Optimization", href: "/services/seo-optimization" },
//       ],
//     },
//     {
//       name: "Training",
//       submenu: [
//         { name: "Workshops", href: "/training/workshops" },
//         { name: "Webinars", href: "/training/webinars" },
//       ],
//     },
//     {
//       name: "Consulting",
//       submenu: [
//         { name: "Business Strategy", href: "/consulting/business-strategy" },
//         { name: "Technology", href: "/consulting/technology" },
//       ],
//     },
//     {
//       name: "Careers",
//       submenu: [
//         { name: "Job Openings", href: "/careers/job-openings" },
//         { name: "Internships", href: "/careers/internships" },
//       ],
//     },
//     { name: "About Us", href: "/about" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <>
//       <div
//         className={`w-full fixed top-0 z-50 h-20 ${
//           isScrolled ? "bg-white shadow-md dark:bg-gray-900" : ""
//         }`}
//       >
//         <nav className="container flex items-center justify-between h-full p-4 mx-auto lg:justify-between xl:px-0">
//           <Disclosure>
//             {({ open }) => (
//               <>
//                 <div className="flex items-center justify-between w-full lg:w-auto">
//                   <Link href="/">
//                     <a className="flex items-center space-x-2">
//                       <img
//                         src="/logos/techinfologo.png"
//                         alt="Logo"
//                         className="w-25 h-20"
//                       />
//                     </a>
//                   </Link>
//                   <div className="flex items-center lg:hidden">
//                     <Disclosure.Button
//                       className="p-2 text-gray-500 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
//                       aria-label="Toggle Menu"
//                     >
//                       {open ? (
//                         <svg className="w-6 h-6" viewBox="0 0 24 24">
//                           <path fill="currentColor" d="M6 18L18 6M6 6l12 12" />
//                         </svg>
//                       ) : (
//                         <svg className="w-6 h-6" viewBox="0 0 24 24">
//                           <path
//                             fill="currentColor"
//                             d="M4 6h16M4 12h16M4 18h16"
//                           />
//                         </svg>
//                       )}
//                     </Disclosure.Button>
//                   </div>
//                 </div>
//                 <Disclosure.Panel className="lg:hidden">
//                   <div className="flex flex-col mt-4 space-y-2">
//                     {navigation.map((item, index) => (
//                       <div key={index}>
//                         {item.submenu ? (
//                           <Disclosure>
//                             {({ open }) => (
//                               <>
//                                 <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
//                                   <span>{item.name}</span>
//                                   <ChevronDownIcon
//                                     className={`w-5 h-5 transition-transform duration-200 ${
//                                       open ? "transform rotate-180" : ""
//                                     }`}
//                                   />
//                                 </Disclosure.Button>
//                                 <Disclosure.Panel className="px-4 pt-2 pb-4">
//                                   {item.submenu.map((subitem, idx) => (
//                                     <Link key={idx} href={subitem.href}>
//                                       <a className="block py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
//                                         {subitem.name}
//                                       </a>
//                                     </Link>
//                                   ))}
//                                 </Disclosure.Panel>
//                               </>
//                             )}
//                           </Disclosure>
//                         ) : (
//                           <Link href={item.href}>
//                             <a className="px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none">
//                               {item.name}
//                             </a>
//                           </Link>
//                         )}
//                       </div>
//                     ))}
//                     <Link href="/">
//                       <a className="px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md">
//                         Sign In
//                       </a>
//                     </Link>
//                     <div className="mt-3">
//                       <ThemeChanger />
//                     </div>
//                   </div>
//                 </Disclosure.Panel>
//               </>
//             )}
//           </Disclosure>
//           <div className="hidden lg:flex lg:items-center">
//             <ul className="flex items-center space-x-6">
//               {navigation.map((menu, index) => (
//                 <li key={index} className="relative group">
//                   {menu.submenu ? (
//                     <>
//                       <button className="flex items-center text-lg font-normal text-gray-800 dark:text-gray-200 hover:text-indigo-500 focus:outline-none">
//                         {menu.name}
//                         <ChevronDownIcon className="w-5 h-5 ml-1 transition-transform duration-200 group-hover:rotate-180" />
//                       </button>
//                       <div className="absolute left-0 z-10 hidden pt-2 group-hover:block">
//                         <div className="w-48 bg-white rounded-md shadow-lg dark:bg-gray-800">
//                           {menu.submenu.map((subitem, idx) => (
//                             <Link key={idx} href={subitem.href}>
//                               <a className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
//                                 {subitem.name}
//                               </a>
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     </>
//                   ) : (
//                     <Link href={menu.href}>
//                       <a className="text-lg font-normal text-gray-800 dark:text-gray-200 hover:text-indigo-500 focus:outline-none">
//                         {menu.name}
//                       </a>
//                     </Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="hidden lg:flex lg:items-center space-x-3">
//             <Link href="/">
//               <a className="px-6 py-2 text-white bg-indigo-600 rounded-md">
//                 Sign In
//               </a>
//             </Link>
//             <ThemeChanger />
//           </div>
//         </nav>
//       </div>
//       <main className="mt-20">{/* Main content goes here */}</main>
//     </>
//   );
// }

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

export default function CustomNavbar() {
  const [anchorElIT, setAnchorElIT] = useState(null);
  const [anchorElTraining, setAnchorElTraining] = useState(null);
  const [anchorElConsulting, setAnchorElConsulting] = useState(null);

  const handlePopoverOpen = (event, setAnchor) => {
    setAnchor(event.currentTarget);
  };

  const handlePopoverClose = (setAnchor) => {
    setAnchor(null);
  };

  const openPopover = (anchorEl) => Boolean(anchorEl);

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
          {/* Assuming you have a ThemeChanger component */}
          <ThemeChanger />

          {/* About and Contact Info */}
          <Link href="/about">
            <a className="hover:text-blue-500">ABOUT US</a>
          </Link>
          <span>|</span>
          <span>215-921-1586</span>
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
          <div>
            <Box
              aria-describedby="it-services-popover"
              className="hover:text-blue-500 text-black"
              onClick={(e) => handlePopoverOpen(e, setAnchorElIT)}
            >
              IT Services
            </Box>
            <Popover
              id="it-services-popover"
              open={openPopover(anchorElIT)}
              anchorEl={anchorElIT}
              onClose={() => handlePopoverClose(setAnchorElIT)}
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
          <div>
            <Box
              aria-describedby="training-popover"
              className="hover:text-blue-500 text-black"
              onClick={(e) => handlePopoverOpen(e, setAnchorElTraining)}
            >
              Trainings
            </Box>
            <Popover
              id="training-popover"
              open={openPopover(anchorElTraining)}
              anchorEl={anchorElTraining}
              onClose={() => handlePopoverClose(setAnchorElTraining)}
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
          <div>
            <Box
              aria-describedby="consulting-popover"
              className="hover:text-blue-500 text-black"
              onClick={(e) => handlePopoverOpen(e, setAnchorElConsulting)}
            >
              Consulting
            </Box>
            <Popover
              id="consulting-popover"
              open={openPopover(anchorElConsulting)}
              anchorEl={anchorElConsulting}
              onClose={() => handlePopoverClose(setAnchorElConsulting)}
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
          <Link href="/freelancing">
            <a className="hover:text-blue-500">Freelancing</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
