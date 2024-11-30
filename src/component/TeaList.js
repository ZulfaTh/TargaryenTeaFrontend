import * as React from 'react';
import { Box, Container } from '@mui/material';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import Grid from '@mui/material/Grid2';
import Tea1 from "../images/tea1.webp";

export default function TeaList() {
  return (
    <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2, md: 3 }, py: 4 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',  // Center the row of images
          padding: '20px 0',  // Add padding above and below the row
        }}
      >
        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="space-between"> {/* Use "space-between" to spread out the images */}
          {/* Image 1 */}
          <Grid item xs={12} sm={4} md={4} sx={{marginLeft:0, marginRight:"0"}}> {/* 4/12 of the row width, so 3 items will fit in the row */}
            <Card sx={{ minHeight: '90vh', width: '100%' }}>
              <CardCover>
                <img
                  src={Tea1}
                  loading="lazy"
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </CardCover>
              <CardCover
                sx={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                }}
              />
              <CardContent sx={{ justifyContent: 'flex-end' }}>
                <Typography level="title-lg" textColor="#fff">
                  Yosemite National Park
                </Typography>
                <Typography startDecorator={<LocationOnRoundedIcon />} textColor="neutral.300">
                  California, USA
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Image 2 */}
          <Grid item xs={12} sm={4} md={4}> {/* Same 4/12 width for each item */}
            <Card sx={{ minHeight: '90vh', width: '100%' }}>
              <CardCover>
                <img
                  src={Tea1}
                  loading="lazy"
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </CardCover>
              <CardCover
                sx={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                }}
              />
              <CardContent sx={{ justifyContent: 'flex-end' }}>
                <Typography level="title-lg" textColor="#fff">
                  Yosemite National Park
                </Typography>
                <Typography startDecorator={<LocationOnRoundedIcon />} textColor="neutral.300">
                  California, USA
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Image 3 */}
          <Grid item xs={12} sm={4} md={4}> {/* Same 4/12 width for each item */}
            <Card sx={{ minHeight: '90vh', width: '100%' }}>
              <CardCover>
                <img
                  src={Tea1}
                  loading="lazy"
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </CardCover>
              <CardCover
                sx={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                }}
              />
              <CardContent sx={{ justifyContent: 'flex-end' }}>
                <Typography level="title-lg" textColor="#fff">
                  Yosemite National Park
                </Typography>
                <Typography startDecorator={<LocationOnRoundedIcon />} textColor="neutral.300">
                  California, USA
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Image 4 */}
          <Grid item xs={12} sm={4} md={4}>
            <Card sx={{ minHeight: '90vh', width: '100%' }}>
              <CardCover>
                <img
                  src={Tea1}
                  loading="lazy"
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </CardCover>
              <CardCover
                sx={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                }}
              />
              <CardContent sx={{ justifyContent: 'flex-end' }}>
                <Typography level="title-lg" textColor="#fff">
                  Yosemite National Park
                </Typography>
                <Typography startDecorator={<LocationOnRoundedIcon />} textColor="neutral.300">
                  California, USA
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Image 5 */}
          <Grid item xs={12} sm={4} md={4}>
            <Card sx={{ minHeight: '90vh', width: '100%' }}>
              <CardCover>
                <img
                  src={Tea1}
                  loading="lazy"
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </CardCover>
              <CardCover
                sx={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                }}
              />
              <CardContent sx={{ justifyContent: 'flex-end' }}>
                <Typography level="title-lg" textColor="#fff">
                  Yosemite National Park
                </Typography>
                <Typography startDecorator={<LocationOnRoundedIcon />} textColor="neutral.300">
                  California, USA
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Image 6 */}
          <Grid item xs={12} sm={4} md={4}>
            <Card sx={{ minHeight: '90vh', width: '100%' }}>
              <CardCover>
                <img
                  src={Tea1}
                  loading="lazy"
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </CardCover>
              <CardCover
                sx={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                }}
              />
              <CardContent sx={{ justifyContent: 'flex-end' }}>
                <Typography level="title-lg" textColor="#fff">
                  Yosemite National Park
                </Typography>
                <Typography startDecorator={<LocationOnRoundedIcon />} textColor="neutral.300">
                  California, USA
                </Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Box>
    </Container>
  );
}
