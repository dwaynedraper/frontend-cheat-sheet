import FormInput from "../../../components/base-ui/FormInput";

export default {
  title: "Components/FormInput",
  component: FormInput,
}

export const FormInputComponent = () => (
  <div>
    <FormInput type="test" placeholder="This is a text box." label="Text Box"/>
  </div>
)