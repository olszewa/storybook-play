import { withCssResources } from '@storybook/addon-cssresources';

import MyButton from './MyButton';

export default {
    title: 'Introduction/Components/Button',
    component: MyButton,
    argTypes: {
        backgroundColor: { control: 'color' },
        type: { control: { type: 'select', options: ['primary', 'success', 'danger']}}
    },
    decorators: [withCssResources],
    parameters: {
        cssresources: [
            {
              id: `bluetheme`,
              code: `<style>body { background-color: lightblue; }</style>`,
              picked: false,
              hideCode: false, // Defaults to false, this enables you to hide the code snippet and only displays the style selector
            },
        ],
        assets: [
            'https://via.placeholder.com/300/09f/fff.png',
            'https://www.example.com',
          ],
    }
}

const Template = (arg, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MyButton },
    template: '<MyButton @onClick="onClick" v-bind="$props" />'
})

export const Default = Template.bind({});
Default.args = {
    type: 'primary',
    label: 'Default'
};

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
    label: 'Primary'
};

export const Success = Template.bind({});
Success.args = {
    type: 'success',
    label: 'success'
};

export const Danger = Template.bind({});
Danger.args = {
    type: 'danger',
    label: 'danger'
};
