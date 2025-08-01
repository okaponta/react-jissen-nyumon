import MyButton from "./MyButton";

export default {
  title: "MyApp/MyButton",
  component: MyButton,
};

export const Index = {
  render: () => (
    <MyButton
      primary
      size="medium"
      label="ボタン"
      onClick={() => console.log("Hello, Storybook!!")}
    />
  ),
};

export const White = {
  args: {
    size: "large",
    label: "ボタン",
    backgroundColor: "#fff",
  },
};

export const Yellow = {
  args: {
    ...White.args,
    backgroundColor: "lightyellow",
  },
};
