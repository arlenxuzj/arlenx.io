import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'ui';

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    controls: {
      include: [
        'children',
        'color',
        'variant',
        'size',
        'disabled',
        'disabledElevation',
        'disableRipple',
        'fullWidth'
      ]
    },
    docs: {
      description: {
        component: 'Button component'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button'
  }
};

export const WithStartIcon: Story = {
  args: {
    ...Default.args,
    children: 'Delete',
    startIcon: <DeleteIcon />
  }
};

export const WithEndIcon: Story = {
  args: {
    ...Default.args,
    children: 'Send',
    endIcon: <SendIcon />
  }
};
