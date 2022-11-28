import Input from "../../../components/base-ui/Input";
import PeopleIcon from "../../../components/icons/PeopleIcon";
import LockIcon from "../../../components/icons/LockIcon";
import MailIcon from "../../../components/icons/MailIcon";

export default {
  title: "Components/Input",
  component: Input,
};

export const InputComponent = () => (
  <section className="bg-white dark:bg-gray-900">
    <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
      <form className="w-full max-w-md">
        <div>
          <Input icon={<PeopleIcon />} name='username' type="text" placeholder="username" handleChange={() => {}} />
        </div>
      </form>
    </div>
  </section>
)

const Template = (args) => <Input {...args} />;

export const Username = Template.bind({});
Username.args = {
  icon: <PeopleIcon />,
  name: 'username',
  type: 'text',
  placeholder: 'Username',
  handleChange: () => {},
};

export const Email = Template.bind({});
Email.args = {
  icon: <MailIcon />,
  name: 'email',
  type: 'email',
  placeholder: 'Email',
  handleChange: () => {},
};

export const Password = Template.bind({});
Password.args = {
  icon: <LockIcon />,
  name: 'password',
  type: 'password',
  placeholder: 'Enter Password',
  handleChange: () => {},
};