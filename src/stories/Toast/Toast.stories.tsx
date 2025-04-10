import { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import Store from "@/Redux/Store";
import { useToasts } from "@/Hooks/useToasts";
import Renderer from "@/Components/Toast/Renderer";
import Appearances from "@/StyleConfig/Appearances";
import Placements from "@/StyleConfig/Placements";
import Style from "@/Components/Button/Style";
import { IToast } from "@/Interface";

const meta: Meta = {
  title: "Toast",
  component: Renderer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "상태를 확인하고 알림을 화면에 나타냅니다.",
      },
    },
  },
  decorators: [
    (Story) => (
      <Provider store={Store}>
        <Renderer />
        <Story />
      </Provider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    content: {
      description: "Toast 안에 들어갈 내용을 작성합니다.",
      control: "text",
      table: {
        category: "필수속성",
        type: {
          summary: "ReactNode",
        },
      },
    },
    autoDismiss: {
      description: "자동으로 알림창이 닫히게할지 여부를 선택합니다.",
      type: "boolean",
      control: "boolean",
      table: { category: "옵션속성", defaultValue: { summary: "false" } },
    },
    appearance: {
      description: "알림창의 스타일을 선택합니다.",
      control: "select",
      options: Object.keys(Appearances),
      table: {
        category: "필수속성",
        type: {
          summary: "string",
          detail: Object.keys(Appearances)
            .map((appearance) => `'${appearance}`)
            .join(" | "),
        },
      },
    },
    placement: {
      description: "알림창의 위치를 선택합니다.",
      control: "select",
      options: Object.keys(Placements),
      table: {
        category: "필수속성",
        type: {
          summary: "string",
          detail: Object.keys(Placements)
            .map((placement) => `'${placement}`)
            .join(" | "),
        },
      },
    },
    showCloseButton: {
      description: "닫힘 버튼이 보일지를 선택합니다.",
      type: "boolean",
      control: "boolean",
      table: { category: "옵션속성", defaultValue: { summary: "true" } },
    },
  },
};

export default meta;

const Toast = ({
  content,
  appearance,
  autoDismiss,
  placement,
  showCloseButton,
}: Omit<IToast, "id">) => {
  const { addToast } = useToasts();

  const handleClickButton = () => {
    addToast(content, {
      appearance,
      autoDismiss,
      placement,
      showCloseButton,
    });
  };

  return (
    <button onClick={handleClickButton} className={Style(appearance)}>
      {appearance} Toast
    </button>
  );
};

export const Error: StoryObj = {
  render: (args) => (
    <Toast
      content="This is a toast message"
      appearance="error"
      autoDismiss={false}
      placement="top-right"
      showCloseButton={true}
      {...args}
    />
  ),
};

export const Success: StoryObj = {
  render: (args) => (
    <Toast
      content="This is a toast message"
      appearance="success"
      autoDismiss={false}
      placement="top-right"
      showCloseButton={true}
      {...args}
    />
  ),
};

export const Warning: StoryObj = {
  render: (args) => (
    <Toast
      content="This is a toast message"
      appearance="warning"
      autoDismiss={false}
      placement="top-right"
      showCloseButton={true}
      {...args}
    />
  ),
};

export const Info: StoryObj = {
  render: (args) => (
    <Toast
      content="This is a toast message"
      appearance="info"
      autoDismiss={false}
      placement="top-right"
      showCloseButton={true}
      {...args}
    />
  ),
};
