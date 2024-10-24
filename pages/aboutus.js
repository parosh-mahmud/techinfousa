import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

export default function AboutUs() {
  return (
    <Container>
      {/* About Us Heading */}
      <Box my={5} sx={{ textAlign: "center", py: 3 }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", md: "3.5rem" }, // Responsive font sizes
            letterSpacing: 2,
            color: "rgba(0, 51, 102, 0.85)", // Professional deep color tone
          }}
        >
          About Us
        </Typography>

        {/* Subtle Divider */}
        <Box
          component="div"
          sx={{
            width: 80,
            height: 4,
            backgroundColor: "primary.main", // Themed color for the divider
            mx: "auto",
            mb: 2,
          }}
        />
      </Box>

      {/* Hero Section (Text on Left, Image on Right) */}
      <Box my={5}>
        <Grid container spacing={4} alignItems="center">
          {/* Text Section (Left Side) */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold">
              Hello, I'm Shariful Islam.
            </Typography>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="textSecondary"
              gutterBottom
            >
              Founder of TechInfoUSA.
            </Typography>
            <Typography variant="body1" gutterBottom>
              I've been providing consultation and guidance on
              <span style={{ color: "red" }}> Accessibility </span>
              solutions professionally and as part of my practice for more than
              four years now. My work ensures that digital experiences are
              inclusive and accessible to everyone, regardless of abilities.
            </Typography>

            {/* Buttons */}
            <Box mt={4}>
              <Button
                variant="contained"
                color="error"
                size="large"
                sx={{ marginRight: 2 }}
              >
                Let's Talk
              </Button>
              <Button variant="text" color="primary" size="large">
                Check My Blog
              </Button>
            </Box>

            {/* Social Icons */}
            <Box mt={4} display="flex" alignItems="center">
              <IconButton color="error">
                <FaFacebookF />
              </IconButton>
              <IconButton color="error">
                <FaInstagram />
              </IconButton>
              <IconButton color="error">
                <FaTwitter />
              </IconButton>
              <IconButton color="error">
                <FaLinkedinIn />
              </IconButton>
              <IconButton color="error">
                <FaYoutube />
              </IconButton>
              <IconButton color="error">
                <FaEnvelope />
              </IconButton>
            </Box>
          </Grid>

          {/* Image Section (Right Side) */}
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              alt="Shariful Islam"
              sx={{
                height: 600,
                width: "90%",
                objectFit: "fill",
                borderRadius: "10px",
              }}
              image="https://res.cloudinary.com/dpudfjkoq/image/upload/v1729776475/image0-removebg-preview_sqgmu2.png"
            />
          </Grid>
        </Grid>
      </Box>

      {/* Our Values Section */}
      <Box my={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Values
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Customer-Centricity</Typography>
                <Typography variant="body2">
                  We believe in winning together with our customers. At
                  Techinfousa, we value collaboration and are committed to
                  driving mutual success. Through continuous learning and
                  knowledge-sharing, we strive to foster empowerment and
                  curiosity among all our stakeholders.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Innovation</Typography>
                <Typography variant="body2">
                  Innovation thrives when there is a thirst for knowledge. At
                  Techinfousa, we are dedicated to solving root causes rather
                  than simply treating symptoms. We embrace challenges, even
                  when faced with ambiguity, and generate transformative ideas
                  that push boundaries.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Integrity</Typography>
                <Typography variant="body2">
                  We conduct our business with honesty and transparency. At
                  every level of our organization, we uphold our integrity and
                  ensure that our actions align with the best interests of our
                  customers and partners.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Our History Section */}
      <Box my={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Our History
        </Typography>
        <Typography variant="body1" align="center">
          Founded in 2015 as Techinfo LLC, Techinfousa began its journey as an
          IT training company. In 2021, we rebranded to Techinfousa LLC,
          expanding our services beyond training to encompass a wide range of IT
          services, consulting, and staffing solutions. Today, Techinfousa
          operates on a global scale, providing services across multiple
          industries, including IT services, training, consulting, staffing, and
          freelancing. We proudly serve clients from our offices in India,
          Canada, Germany, Saudi Arabia, and Bangladesh.
        </Typography>
      </Box>

      {/* Meet Our Team Section */}
      <Box my={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Meet Our Team
        </Typography>

        {/* CEO Section */}
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8} md={4}>
            <Card sx={{ textAlign: "center" }}>
              <CardMedia
                component="img"
                alt="Shariful Islam"
                sx={{
                  height: 150,
                  width: 150,
                  objectFit: "cover",
                  borderRadius: "50%",
                  opacity: 0.9,
                  mx: "auto",
                }}
                image="https://res.cloudinary.com/dpudfjkoq/image/upload/v1729776475/image0-removebg-preview_sqgmu2.png"
              />
              <CardContent>
                <Typography variant="h6">Shariful Islam</Typography>
                <Typography variant="subtitle1">CEO</Typography>
                <Typography variant="body2">
                  Shariful leads the strategic direction of Techinfousa, driving
                  innovation and overseeing the company's overall operations to
                  ensure we meet our vision and goals.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Other Team Members Row */}
        <Grid container spacing={4} mt={4}>
          <Grid item xs={12} sm={6} md={6}>
            <Card>
              <CardMedia
                component="img"
                alt="Parosh Mahmud"
                sx={{
                  height: 150,
                  width: 150,
                  objectFit: "cover",
                  borderRadius: "50%",
                  opacity: 0.9,
                  mx: "auto",
                }}
                image="https://res.cloudinary.com/dpudfjkoq/image/upload/v1729771472/parosh_qbnquy.jpg"
              />
              <CardContent>
                <Typography variant="h6">Parosh Mahmud</Typography>
                <Typography variant="subtitle1">CTO</Typography>
                <Typography variant="body2">
                  Parosh is responsible for overseeing all technological
                  advancements at Techinfousa, ensuring that our solutions
                  remain at the forefront of innovation.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card>
              <CardMedia
                component="img"
                alt="Sajib Ahmed"
                sx={{
                  height: 150,
                  width: 150,
                  objectFit: "cover",
                  borderRadius: "50%",
                  opacity: 0.9,
                  mx: "auto",
                }}
                image="https://res.cloudinary.com/dpudfjkoq/image/upload/v1729771471/sojib_opvo9z.jpg"
              />
              <CardContent>
                <Typography variant="h6">Sajib Ahmed</Typography>
                <Typography variant="subtitle1">Supervisor</Typography>
                <Typography variant="body2">
                  Sajib oversees day-to-day operations and ensures the delivery
                  of quality services and seamless project management across
                  various departments.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
