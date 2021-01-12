import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import MyHeading from './MyHeading';

export default {
  title: 'Introduction/Components/Headings',
  decorators: [withKnobs],
}

export const Heading = () => ({
    components: { MyHeading },
    props: {
        text: {
            default: text('Text', 'Heading'),
        },
        bordered: {
            default: boolean('Bordered', false)
        }
    },
    template: '<MyHeading :bordered="bordered" :text="text">{{ text }}</MyHeading>'
});
