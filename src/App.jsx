import React from 'react';
import { 
  MantineProvider, 
  Box, 
  Title, 
  Text, 
  Container, 
  Stack, 
  Group, 
  UnstyledButton 
} from '@mantine/core';
import { 
  IconBrandTelegram, 
  IconBrandWhatsapp, 
  IconPhone,
  IconArrowUpRight
} from '@tabler/icons-react';

const monochromeTheme = {
  fontFamily: '"Google Sans", sans-serif',
  headings: {
    fontFamily: '"Google Sans", sans-serif',
  },
  black: '#000000',
  white: '#FFFFFF',
};

export default function App() {
  return (
    <MantineProvider defaultColorScheme="light" theme={monochromeTheme}>
      <style>
        {`
          @font-face {
            font-family: 'Google Sans';
            src: url('https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumwegdm0LZdjqr5-oayXSOefg.woff2') format('woff2');
            font-weight: 400;
            font-style: normal;
          }
          @font-face {
            font-family: 'Google Sans';
            src: url('https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumweKqd0HkGN4sHk7nB5GgT1I.woff2') format('woff2');
            font-weight: 700;
            font-style: normal;
          }
          @font-face {
            font-family: 'Google Sans';
            src: url('https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumweKxcPTngZzQhB_q-B5GgT1I.woff2') format('woff2');
            font-weight: 900;
            font-style: normal;
          }
          
          body {
            margin: 0;
            background-color: #FFFFFF;
            color: #000000;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          .mono-btn {
            transition: background-color 0.2s, color 0.2s;
          }
          .mono-btn:hover {
            background-color: #000000 !important;
            color: #FFFFFF !important;
          }
          .mono-btn:hover svg {
            color: #FFFFFF !important;
          }
        `}
      </style>

      <Box 
        style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '2rem 1rem',
          backgroundColor: '#FFFFFF'
        }}
      >
        <Container size="xs" w="100%" p={0}>
          <Box 
            style={{ 
              border: '3px solid #000000',
              backgroundColor: '#FFFFFF',
            }}
          >
            {/* ШАПКА / ЛОГОТИП */}
            <Box p="2rem" style={{ borderBottom: '3px solid #000000' }}>
              <Text 
                size="xs" 
                fw={900} 
                c="#000000" 
                style={{ letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}
              >
                KZ / Алматы
              </Text>
              
              <Title 
                order={1} 
                fw={900} 
                style={{ 
                  fontSize: 'clamp(3rem, 12vw, 4.5rem)', 
                  lineHeight: 0.85,
                  letterSpacing: '-0.04em',
                  textTransform: 'uppercase',
                  color: '#000000',
                  wordWrap: 'break-word'
                }}
              >
                PRO<br/>ELECTRO
              </Title>
            </Box>

            {/* ОПИСАНИЕ */}
            <Box p="2rem" style={{ borderBottom: '3px solid #000000' }}>
              <Text fw={500} size="lg" lh={1.4} c="#000000">
                Профессиональный электромонтаж. 
                Никаких посредников, только прямой контакт с мастером. 
                Точный расчет и соблюдение стандартов.
              </Text>
            </Box>

            {/* КОНТАКТЫ (СЕТКА) */}
            <Stack gap={0}>
              
              {/* Телефон (Инвертированный блок для главного акцента) */}
              <UnstyledButton
                component="a"
                href="tel:+77066066323"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.5rem 2rem',
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
                  borderBottom: '3px solid #000000',
                }}
              >
                <Box>
                  <Text fw={700} size="xs" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.8, marginBottom: '0.2rem' }}>
                    Прямой вызов
                  </Text>
                  <Text fw={900} style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', letterSpacing: '-0.02em' }}>
                    +7 706 606 63 23
                  </Text>
                </Box>
                <IconPhone size={32} stroke={2} color="#FFFFFF" />
              </UnstyledButton>

              {/* Telegram */}
              <UnstyledButton
                component="a"
                href="https://t.me/yeeeerniyaz"
                target="_blank"
                className="mono-btn"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.5rem 2rem',
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  borderBottom: '3px solid #000000',
                }}
              >
                <Group gap="md">
                  <IconBrandTelegram size={28} stroke={2} color="#000000" />
                  <Text fw={900} size="xl" style={{ letterSpacing: '-0.02em' }}>TELEGRAM</Text>
                </Group>
                <IconArrowUpRight size={24} stroke={2} color="#000000" />
              </UnstyledButton>

              {/* WhatsApp */}
              <UnstyledButton
                component="a"
                href="https://wa.me/77066066323"
                target="_blank"
                className="mono-btn"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.5rem 2rem',
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                }}
              >
                <Group gap="md">
                  <IconBrandWhatsapp size={28} stroke={2} color="#000000" />
                  <Text fw={900} size="xl" style={{ letterSpacing: '-0.02em' }}>WHATSAPP</Text>
                </Group>
                <IconArrowUpRight size={24} stroke={2} color="#000000" />
              </UnstyledButton>

            </Stack>
          </Box>
        </Container>
      </Box>
    </MantineProvider>
  );
}