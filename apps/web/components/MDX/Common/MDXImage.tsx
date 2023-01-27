import Image from 'next/image';

import { Box } from '@mui/material';

export type MDXImageProps = {
  src?: string;
  alt?: string;
  originWidth?: string;
  originHeight?: string;
  originRatio?: string;
  renderedWidth?: string;
  maxRenderWidth?: string;
  children?: React.ReactNode;
};

const MDXImage = (props: MDXImageProps) => {
  const { src, alt, renderedWidth, originWidth, maxRenderWidth, originRatio } =
    props;

  if (!src) {
    return null;
  }

  let width = Number(maxRenderWidth);

  if (!renderedWidth) {
    if (originWidth && Number(originWidth) < Number(maxRenderWidth)) {
      width = Number(originWidth);
    }
  } else {
    if (Number(renderedWidth) < Number(maxRenderWidth)) {
      width = Number(renderedWidth);
    }
  }

  return (
    <Box
      sx={{
        width: '100%',
        mb: 5,
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Image
        src={src}
        alt={alt || 'image'}
        width={width}
        height={Math.round(width / Number(originRatio))}
        style={{
          maxWidth: '100%',
          height: 'auto'
        }}
      />
    </Box>
  );
};

export default MDXImage;
