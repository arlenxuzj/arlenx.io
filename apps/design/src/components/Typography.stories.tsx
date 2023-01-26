import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from 'ui';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    controls: {
      include: [
        'children',
        'variant',
        'noSelect',
        'align',
        'gutterBottom',
        'noWrap',
        'paragraph',
        'color',
        'family'
      ]
    },
    docs: {
      description: {
        component: 'Typography component'
      }
    }
  },
  argTypes: {
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'error',
        'text.primary',
        'text.secondary',
        'text.disabled'
      ]
    },
    family: {
      control: 'radio',
      options: ['default', 'mono']
    }
  }
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    color: 'text.primary'
  }
};

export const Colored: Story = {
  args: {
    ...Default.args,
    color: 'primary'
  }
};

export const FontSize: Story = {
  parameters: {
    controls: {
      include: ['fontSize']
    }
  },
  args: {
    ...Default.args,
    fontSize: 18
  },
  argTypes: {
    fontSize: {
      control: 'number'
    }
  }
};

export const NoSelect: Story = {
  args: {
    ...Default.args,
    noSelect: true
  }
};
