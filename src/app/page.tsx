'use client';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { InputSearch } from '@/components/InputSearch';
import theme from '@/components/ThemeRegistry/theme';
import { Title } from '@/components/Title';
import { User } from '@/components/User';
import { Container, ThemeProvider } from '@mui/material';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <User />
          <Title />
          <InputSearch />
        </Header>
        <Hero />
      </Container>
    </ThemeProvider>
  );
}
