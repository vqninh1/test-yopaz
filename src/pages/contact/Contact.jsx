import { ImMobile, ImHome3, ImDrawer2 } from 'react-icons/im';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Contact = () => {
  return (
    <div>
      <div className="container min-w-full md:min-w-fit container mx-auto text-center mt-6 text-white">
        <article>
          <div className="max-w-xl md:w-4/6 lg:w-3/6 xl:w-2/6 mx-auto px-4">
            <div
              className="p-3 rounded-lg mt-1 title font-semibold"
              style={{ backgroundColor: '#313134' }}
            >
              <p>About me</p>
            </div>
            <div className="items-border mt-4 pb-14 border-b border-gray-100">
              <h3
                className="w-fit text-start text-xl font-bold border-b-4"
                style={{ borderColor: 'rgb(129, 230, 217)' }}
              >
                Contact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div
                  className="mb-4 rounded py-4 info-items"
                  style={{ backgroundColor: '#313134' }}
                >
                  <ImMobile className="info-icon mx-auto text-2xl" />
                  <p className="text-lg mt-2">+84 123456789</p>
                  <p className="text-base">Monday - Friday 7am - 5pm</p>
                </div>
                <div
                  className="mb-4 rounded py-4 info-items"
                  style={{ backgroundColor: '#313134' }}
                >
                  <ImHome3 className="info-icon mx-auto text-2xl" />
                  <p className="text-lg mt-2">Hanoi, Vietnam</p>
                  <p className="text-base">Hoang Mai, Vietnam 10000</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pb-4">
              <form action="#">
                <h3
                  className="w-fit text-start text-xl font-bold border-b-4"
                  style={{ borderColor: 'rgb(129, 230, 217)' }}
                >
                  Get In Touch
                </h3>

                <div className="mt-6">
                  <input
                    className="w-full p-2 mb-4 border text-lg rounded text-black "
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <input
                    className="w-full p-2 mb-4 border text-lg rounded text-black "
                    type="email"
                    placeholder="Enter email address"
                    required
                  />
                </div>

                <div>
                  <textarea
                    className="w-full p-2 mb-4 border text-lg rounded text-black "
                    type="message"
                    placeholder="Enter your message"
                    rows="4"
                    cols="50"
                    required
                  />
                </div>

                <div>
                  <Link
                    to={'/portfolio'}
                    className="btn w-fit flex items-center mx-auto px-4 py-2 text-black font-semibold rounded-lg mt-4"
                    style={{
                      backgroundColor: '#81e6d9',
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    Send Message
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Contact;
