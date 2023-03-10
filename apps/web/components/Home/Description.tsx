import { Text } from 'ui/components';

import { Box, Stack } from '@mui/material';

import { umamiEventClass } from '../../utils/umami';
import TypedDescription from '../Animation/TypedDescription';
import WavingHand from '../Animation/WavingHand';
import InlineCode from '../Code/InlineCode';
import { InternalLink } from '../Link';

const Description = () => {
  return (
    <Box
      sx={{
        width: '100%'
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Text
          component='span'
          color='text.primary'
          fontWeight={800}
          sx={theme => ({
            fontSize: {
              xs: 36,
              md: 54
            },
            backgroundColor: theme.vars.palette.primary.main,
            backgroundSize: '100%',
            backgroundImage: `linear-gradient(to right, ${theme.vars.palette.primary.main}, ${theme.vars.palette.error.main});`,
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          })}
        >
          {'Hello, folks! '}
        </Text>
        <Text
          component='span'
          sx={{
            fontSize: {
              xs: 36,
              md: 54
            }
          }}
        >
          <WavingHand />
        </Text>
      </Box>
      <Text
        component='h1'
        color='text.primary'
        size='md'
        fontWeight={500}
        sx={{
          lineHeight: '32px'
        }}
      >
        {"I'm "}
        <b>Zhen Jun Xu</b>
        {' - a full-stack developer in Vancouver, Canada '}
        <i className='twa twa-lg twa-flag-canada'></i>.
      </Text>
      <TypedDescription />
      <Text
        color='text.secondary'
        size='md'
        sx={{
          mt: 2,
          mb: 4,
          lineHeight: 1.8
        }}
      >
        {'I started my coding journey in 2015 with '}
        <InlineCode>Python</InlineCode> / <InlineCode>C</InlineCode> /{' '}
        <InlineCode>C++</InlineCode> in university.
        <br />
        {'I play in '}
        <InlineCode>.tsx?</InlineCode>, <InlineCode>.jx?</InlineCode>,{' '}
        <InlineCode>.css</InlineCode>
        {' every day.'}
        <br />
        {'I like JavaScript ecosystem and currently learning '}
        <InlineCode>Next.js</InlineCode>
        {' Framework.'}
      </Text>

      <Stack lineHeight={1.8} gap={0.5} alignItems='flex-start'>
        <InternalLink
          href='/posts'
          color='text.secondary'
          underline='hover'
          fontSize={18}
        >
          <span className={umamiEventClass(`home-posts-link`)}>
            <i className='twa twa-lg twa-memo'></i>
            <Box component='span' sx={{ ml: 1 }}>
              My writings
            </Box>
          </span>
        </InternalLink>
        <InternalLink
          href='/projects'
          color='text.secondary'
          underline='hover'
          fontSize={18}
        >
          <span className={umamiEventClass(`home-projects-link`)}>
            <i className='twa twa-lg twa-hammer-and-wrench'></i>
            <Box component='span' sx={{ ml: 1 }}>
              What have I built?
            </Box>
          </span>
        </InternalLink>
        <InternalLink
          href='/snippets'
          color='text.secondary'
          underline='hover'
          fontSize={18}
        >
          <span className={umamiEventClass(`home-snippets-link`)}>
            <i className='twa twa-lg twa-robot'></i>
            <Box component='span' sx={{ ml: 1 }}>
              Useful snippets collected by me
            </Box>
          </span>
        </InternalLink>
        <InternalLink
          href='/resume'
          color='text.secondary'
          underline='hover'
          fontSize={18}
        >
          <span className={umamiEventClass(`home-resume-link`)}>
            <i className='twa twa-lg twa-briefcase'></i>
            <Box component='span' sx={{ ml: 1 }}>
              My resume
            </Box>
          </span>
        </InternalLink>
        <InternalLink
          href='/about'
          color='text.secondary'
          underline='hover'
          fontSize={18}
        >
          <span className={umamiEventClass(`home-about-link`)}>
            <i className='twa twa-lg twa-face-with-monocle'></i>
            <Box component='span' sx={{ ml: 1 }}>
              More about me and this site
            </Box>
          </span>
        </InternalLink>
      </Stack>

      <Text color='text.secondary' size='md' sx={{ mt: 4 }}>
        Happy reading!&nbsp;
        <Box
          component='span'
          sx={{
            verticalAlign: 'middle'
          }}
        >
          <i className='twa twa-lg twa-clinking-beer-mugs'></i>
        </Box>
      </Text>
    </Box>
  );
};

export default Description;
