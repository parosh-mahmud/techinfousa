import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";

export default function AboutUs() {
  return (
    <Container>
      {/* About Us Heading */}
      <Box my={5}>
        <Typography variant="h2" align="center" gutterBottom>
          About Us
        </Typography>
      </Box>

      {/* Our Vision Section */}
      <Box my={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Vision
        </Typography>
        <Typography variant="body1" align="center">
          At Techinfousa, we envision a world where small business owners can
          maximize their business growth through transformative technologies. We
          aim to revolutionize traditional processes, like accounting, by
          empowering businesses with software that not only assesses the past
          but also accelerates future success.
        </Typography>
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

      {/* Team Section */}
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
                alt="Shariful islam"
                sx={{
                  height: 150,
                  width: 150,
                  objectFit: "cover", // Focuses on the face
                  objectPosition: "top", // Ensure the top part is prioritized
                  borderRadius: "50%", // Make the image round
                  opacity: 0.9, // Slight transparency effect
                  mx: "auto", // Center image horizontally
                }}
                image="https://res.cloudinary.com/dpudfjkoq/image/upload/v1729771456/shariful_hy5tcp.jpg"
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
                  objectFit: "cover", // Focuses on the face
                  objectPosition: "top", // Ensure the top part is prioritized
                  borderRadius: "50%", // Make the image round
                  opacity: 0.9, // Slight transparency effect
                  mx: "auto", // Center image horizontally
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
                  objectFit: "cover", // Focuses on the face
                  objectPosition: "left", // Ensure the top part is prioritized
                  borderRadius: "50%", // Make the image round
                  opacity: 0.9, // Slight transparency effect
                  mx: "auto", // Center image horizontally
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
