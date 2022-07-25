import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button.component";
import { IconAnchor, IconBookmark } from "@tabler/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    colorStyle: {
      control: "select",
      options: ["filled", "outlined", "tonal"],
      defaultValue: "filled",
    },
    iconLeft: { control: "none" },
    iconRight: { control: "none" },
    onClick: { action: "clicked", control: "none" },
    disabled: { control: "boolean", defaultValue: false },
    color: { control: "text", defaultValue: "primary" },
    size: {
      control: "select",
      options: ["small", "default", "large"],
      defaultValue: "default",
    },
  },
  parameters: { layout: "centered", backgrounds: { default: "light" } },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Standard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = {
  label: "Button",
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  label: "Button with icon",
  iconLeft: IconAnchor,
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  label: "With right icon",
  iconRight: IconBookmark,
};
