import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import retroPic from '../../assets/image-retro-pcs.jpg';
import top10LaptopsPic from '../../assets/image-top-laptops.jpg';
import growthGamingPic from '../../assets/image-gaming-growth.jpg';

const articles = [
  {
    id: '01',
    title: 'Reviving Retro PCs',
    desc: 'What happens when old PCs are given modern upgrades?',
    img: retroPic,
  },
  {
    id: '02',
    title: 'Top 10 Laptops of 2022',
    desc: 'Our best picks for various needs and budgets.',
    img: top10LaptopsPic,
  },
  {
    id: '03',
    title: 'The Growth of Gaming',
    desc: 'How the pandemic has sparked fresh opportunities.',
    img: growthGamingPic,
  },
];

export default function Cards() {
  return (
    <>
      <Container sx={{ mt: 8 }}>
        <Grid container spacing={2}>
          {articles.map((article) => (
            <Grid
              key={article.id}
              size={{ xs: 12, sm: 4 }}
              display={'flex'}
              justifyContent={'space-between'}
            >
              <Box component={'img'} src={article.img} width={'40%'}></Box>
              <Box display={'flex'} flexDirection={'column'} ml={3}>
                <Typography
                  variant="h4"
                  fontWeight={'800'}
                  color="hsl(5, 85%, 63%)"
                  mb={1}
                >
                  {article.id}
                </Typography>
                <Typography
                  fontWeight={'800'}
                  mb={1}
                  sx={{
                    '&:hover': { color: 'hsl(5, 85%, 63%)', cursor: 'pointer' },
                  }}
                >
                  {article.title}
                </Typography>
                <Typography variant="subtitle2" color="hsl(236, 13%, 42%)">
                  {article.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
