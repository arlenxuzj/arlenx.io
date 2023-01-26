import { motion } from 'framer-motion';

import { styled } from '@mui/material';

export const ProgressBarWrapper = styled(motion.div)(({ theme }) => ({
  height: '100%',
  width: 2,
  backgroundColor: theme.vars.palette.background['toc-process-bar'],
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));
