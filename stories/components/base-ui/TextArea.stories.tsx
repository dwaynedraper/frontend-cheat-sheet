import TextArea from "../../../components/base-ui/TextArea";

export default {
  title: "Components/TextArea",
  component: TextArea,
}

export const TextAreaComponent = () => (
  <div>
    <TextArea
      classes=""
      id="textarea"
      name="textarea"
      placeholder="Enter your message here"
      onBlur={(e: any) => console.log(e.target.value)}
      onChange={(e: any) => console.log(e.target.value)}
    />
  </div>
)