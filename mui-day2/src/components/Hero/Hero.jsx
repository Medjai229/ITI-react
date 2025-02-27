import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import desktopHero from '../../assets/image-web-3-desktop.jpg';
import mobileHero from '../../assets/image-web-3-mobile.jpg';

export default function Hero() {
  return (
    <>
      <Container sx={{ mt: 3 }}>
        {/* hero grid */}
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 8 }}>
            <Grid container spacing={{ xs: 2, sm: 3 }}>
              <Box
                component="img"
                src={desktopHero}
                width="100%"
                sx={{ display: { xs: 'none', sm: 'block' } }}
              ></Box>
              <Box
                component="img"
                src={mobileHero}
                width="100%"
                sx={{ display: { xs: 'block', sm: 'none' } }}
              ></Box>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                  variant="h2"
                  fontWeight={800}
                  sx={{ fontSize: { xs: '2.5rem', sm: '3.75rem' } }}
                >
                  The Bright Future of Web 3.0?
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box pt={{ xs: 0, sm: 2 }}>
                  <Typography
                    color="hsl(236, 13%, 42%)"
                    sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}
                  >
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                  </Typography>
                  <Button
                    variant="contained"
                    disableElevation
                    color="hsl(5, 85%, 63%)"
                    sx={{
                      borderRadius: '0',
                      letterSpacing: '4px',
                      fontSize: '0.8rem',
                      padding: '0.6rem 2rem',
                      marginTop: { xs: '20px', sm: '45px' },
                      fontWeight: '800',
                      color: 'hsl(240, 100%, 5%)',
                      backgroundColor: 'hsl(5, 85%, 63%)',
                      '&:hover': {
                        color: 'hsl(36, 100%, 99%)',
                        backgroundColor: 'hsl(240, 100%, 5%)',
                      },
                    }}
                  >
                    Read more
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* Article Box */}
          <Grid size={{ sx: 12, sm: 4 }}>
            <Box sx={{ backgroundColor: 'hsl(240, 100%, 5%)' }}>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: '2rem', sm: '3rem' } }}
                color="hsl(35, 77%, 62%)"
                fontWeight="700"
                pl={3}
                pt={4}
              >
                New
              </Typography>
              <Stack
                spacing={5}
                p={3}
                divider={
                  <Divider
                    sx={{ backgroundColor: 'hsl(233, 8%, 79%)' }}
                  ></Divider>
                }
              >
                <Box>
                  <Typography
                    variant="h6"
                    color="white"
                    fontWeight="800"
                    sx={{
                      cursor: 'pointer',
                      '&:hover': { color: 'hsl(35, 77%, 62%)' },
                    }}
                  >
                    Hydrogen VS Electric Cars
                  </Typography>
                  <Typography color="hsl(233, 8%, 79%)">
                    Will hydrogen-fueled cars ever catch up to EVs?
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    color="white"
                    fontWeight="800"
                    sx={{
                      cursor: 'pointer',
                      '&:hover': { color: 'hsl(35, 77%, 62%)' },
                    }}
                  >
                    The Downsides of AI Artistry
                  </Typography>
                  <Typography color="hsl(233, 8%, 79%)">
                    What are the possible adverse effects of on-demand AI image
                    generation?
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    color="white"
                    fontWeight="800"
                    sx={{
                      cursor: 'pointer',
                      '&:hover': { color: 'hsl(35, 77%, 62%)' },
                    }}
                  >
                    Is VC Funding Drying Up?
                  </Typography>
                  <Typography color="hsl(233, 8%, 79%)" mb={2}>
                    Private funding by VC firms is down 50% YOY. We take a look
                    at what that means.
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
