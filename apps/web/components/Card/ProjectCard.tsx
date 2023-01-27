import Image from 'next/image';
import { Text } from 'ui/components';

import { Box, Card, CardContent, Stack } from '@mui/material';

import { Project } from '../../configs/projectsData';
import { DEFAULT_CONTENT_WIDTH } from '../../constants';
import { GithubRepo as GithubRepoType } from '../../services/github';
import { ExternalLink } from '../Link';
import GithubRepo from './GithubRepo';

export type ProjectCardProps = {
  project: Project;
  repo?: GithubRepoType;
};

const ProjectCard = ({ project, repo }: ProjectCardProps) => {
  const { title, description, techStack, imageUrl, url } = project;
  const href = repo?.html_url || url;

  return (
    <Card
      variant='outlined'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: DEFAULT_CONTENT_WIDTH / 2,
        backgroundColor: 'background.default'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 240
        }}
      >
        <Image
          src={imageUrl || '/images/project-default-image.png'}
          alt={title}
          fill
          priority
          style={{
            objectFit: 'cover'
          }}
        />
      </Box>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          backgroundColor: 'background.default'
        }}
      >
        <Stack flexGrow={1}>
          <Text
            component='h3'
            color='text.primary'
            fontWeight={600}
            size='2xl'
            sx={{
              mb: 2
            }}
          >
            {href ? (
              <ExternalLink
                color='inherit'
                underline='none'
                href={href}
                sx={{
                  fontWeight: 600
                }}
              >
                {title}
              </ExternalLink>
            ) : (
              title
            )}
          </Text>
          <Text
            color='text.secondary'
            sx={{
              mb: 1
            }}
          >
            {description}
          </Text>
          <Text color='text.secondary'>
            {'Tech Stack: '}
            <Text component='span' fontWeight={600}>
              {techStack.join(', ')}
            </Text>
          </Text>
        </Stack>
        <Box
          sx={{
            mt: 3
          }}
        >
          {repo ? (
            <GithubRepo repo={repo} />
          ) : (
            <Stack
              direction='row'
              justifyContent='flex-start'
              alignItems='center'
            >
              <ExternalLink
                href={url}
                noReferrer={false}
                underline='none'
                color='text.primary'
                className='arrow arrow-right'
                fontSize={16}
                sx={{
                  ml: 0.5,
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}
              >
                Learn More
              </ExternalLink>
            </Stack>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
export default ProjectCard;
