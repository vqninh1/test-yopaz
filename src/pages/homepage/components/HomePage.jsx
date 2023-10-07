import { Link } from 'react-router-dom';
import avatar from './unnamed.jpg';
import { HiChevronRight } from 'react-icons/hi';
import { FaHeart, FaGithub, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram, AiFillMail } from 'react-icons/ai';
import { Modal, Button, Form, Input, InputNumber } from 'antd';
import { useState } from 'react';

const HomePage = ({}) => {
  const [modal2Open, setModal2Open] = useState(false);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="min-w-full md:min-w-fit container mx-auto text-center mt-6 text-white">
      <article className="">
        <div
          className="max-w-xl md:w-4/6 lg:w-3/6 xl:w-2/6 mx-auto px-4"
          style={{}}
        >
          <div
            className="p-3 rounded-lg mt-1 title"
            style={{ backgroundColor: '#313134' }}
          >
            <p className="text-lg md:text-xl">
              Hello, I'm an front-end developer in Vietnam!
            </p>
          </div>

          <div className="block md:flex justify-between items-center mt-6">
            <div className="profile text-left md:text-center">
              <h2 className="text-4xl font-semibold">Vuong Quang Ninh</h2>
              <p className="mt-1">Front-end Developer ( ReactJS )</p>
            </div>
            <div className="avatar">
              <div
                className="h-28 w-28 border-white border-2 rounded-full mx-auto mt-2"
                style={{}}
              >
                <img
                  src={avatar}
                  alt="avatar"
                  className="rounded-full"
                  style={{}}
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3
              className="w-fit text-start text-xl font-bold border-b-4"
              style={{ borderColor: '#525252' }}
            >
              Work
            </h3>
            <p className="text-justify indent-6 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div>
              <Link
                to={'/portfolio'}
                className="btn w-fit flex items-center justify-center mx-auto px-4 py-2 text-black font-semibold rounded-lg mt-4"
                style={{
                  backgroundColor: '#81e6d9',
                }}
              >
                My portfolio
                <HiChevronRight className="ml-2 mt-1" />
              </Link>
            </div>
          </div>

          <div className="mt-4">
            <h3
              className="w-fit text-start text-xl font-bold border-b-4"
              style={{ borderColor: '#525252' }}
            >
              Bio
            </h3>
            <div className="flex">
              <span className="mr-4 mt-2 font-bold">2001</span>
              <p className="text-left mt-2">Born in Hanoi capital of Vietnam</p>
            </div>
            <div className="flex">
              <span className="mr-4 font-bold">2019</span>
              <p className="text-left">
                Started studying information technology at Thuy Loi University,
                majoring in Information Systems
              </p>
            </div>
            <div className="flex">
              <span className="mr-4 font-bold">2023</span>
              <p className="text-left">
                Complete a short course on the ReactJS framework
              </p>
            </div>

            <div>
              <h3
                className="w-fit flex items-center text-start text-xl font-bold border-b-4"
                style={{ borderColor: '#525252' }}
              >
                I <FaHeart className="ml-2 text-lg" />
              </h3>
              <p className="text-justify indent-6 mt-2 tracking-tight">
                Art, Music, Dancing, Playing Soccer, Basketball, Jogging,
                Machine Learning
              </p>
            </div>

            <div>
              <h3
                className="w-fit items-center text-start text-xl font-bold border-b-4"
                style={{ borderColor: '#525252' }}
              >
                On the web
              </h3>
              <ul>
                <li className="my-3">
                  <a
                    href="https://github.com/vqninh1"
                    style={{ color: '#81e6d9' }}
                  >
                    <button className="flex items-center text-lg font-semibold">
                      <FaGithub className="ml-4 mr-2" />
                      @vqninh1
                    </button>
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href="https://twitter.com/vqninh1"
                    style={{ color: '#81e6d9' }}
                  >
                    <button className="flex items-center text-lg font-semibold">
                      <FaTwitter className="ml-4 mr-2" />
                      @vqninh1
                    </button>
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href="https://github.com/vqninh1"
                    style={{ color: '#81e6d9' }}
                  >
                    <button className="flex items-center text-lg font-semibold">
                      <AiFillInstagram className="ml-4 mr-2" />
                      @quangninh.08
                    </button>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3
                className="w-fit items-center text-start text-xl font-bold border-b-4"
                style={{ borderColor: '#525252' }}
              >
                Newsletter
              </h3>
              <p className="text-justify mt-2">Contact with me</p>
              <a
                href="#"
                className="w-fit btn flex items-center justify-center mx-auto px-4 py-2 text-black font-semibold rounded-lg mt-4"
                style={{
                  backgroundColor: '#81e6d9',
                }}
              >
                <span
                  className="btn-text flex items-center justify-center"
                  onClick={() => setModal2Open(!modal2Open)}
                >
                  <AiFillMail className="mr-2" />
                  Send me newletters here
                </span>
                <Modal
                  title="Send Mail"
                  centered
                  open={modal2Open}
                  onOk={() => setModal2Open(false)}
                  onCancel={() => setModal2Open(false)}
                >
                  <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    style={{ maxWidth: 600 }}
                    validateMessages={validateMessages}
                  >
                    <Form.Item
                      name={['user', 'name']}
                      label="Name"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={['user', 'email']}
                      label="Email"
                      rules={[{ type: 'email' }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={['user', 'age']}
                      label="Age"
                      rules={[{ type: 'number', min: 0, max: 99 }]}
                    >
                      <InputNumber />
                    </Form.Item>
                    <Form.Item name={['user', 'website']} label="Website">
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={['user', 'introduction']}
                      label="Introduction"
                    >
                      <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </Modal>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default HomePage;
