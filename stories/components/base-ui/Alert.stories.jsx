import Alert from "../../../components/base-ui/Alert";
import { AlertType } from "../../../types/alerts";

export default {
  title: "Components/Alert",
  component: Alert,
}

export const AlertComponent = () => (
  <Alert type={AlertType.Success} strongText='Awesome!' message='Your profile has been updated.' />
)

const Template = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  type: AlertType.Success,
  strongText: 'Success! ',
  message: ' Congratulations, you did it!',
};

export const Info = Template.bind({});
Info.args = {
  type: AlertType.Info,
  strongText: 'Info! ',
  message: ' This should say something important!',
};

export const Warning = Template.bind({});
Warning.args = {
  type: AlertType.Warning,
  strongText: 'Warning! ',
  message: 'Oh no. Something\'s gone terribly wrong!',
};

export const Error = Template.bind({});
Error.args = {
  type: AlertType.Error,
  strongText: 'Error: ',
  message: 'You can\'t be doing that man!',
};
