import { Button, Form, Input, InputNumber, Select } from "antd";
import { createNewStudent } from "../api/student";
import { useNavigate } from "react-router";

export function CreateStudentForm() {
  let navigate = useNavigate();
  
  async function onFinish(submittedValue) {
    console.log(submittedValue);
    await createNewStudent(submittedValue);
    navigate("/data-list")
  }
  const onFinishFailed = () => {};
  return (
    <div>
      <div style={{}}>
        <Form
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Full Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Image Url" name="avatar">
            <Input />
          </Form.Item>
          <Form.Item label="Age" name="age">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Campus" name="campus">
            <Select>
              <Select.Option value="HCM">HCM</Select.Option>
              <Select.Option value="HN">HN</Select.Option>
              <Select.Option value="QN">QN</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
