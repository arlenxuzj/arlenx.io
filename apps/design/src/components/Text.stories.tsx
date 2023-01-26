import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'ui';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    controls: {
      include: ['children', 'size']
    },
    docs: {
      description: {
        component: 'Text component extend Typography component'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    color: 'text.primary'
  }
};
