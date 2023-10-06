import { Link } from 'react-router-dom';
import avatar from './unnamed.jpg';
import { HiChevronRight } from 'react-icons/hi';
import { FaHeart, FaGithub, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram, AiFillMail } from 'react-icons/ai';
import logo from './logo.svg';
import './App.css';

const HomePage = ({}) => {
  return (
    <div className="container mx-auto text-center mt-20 text-white">
      <article className="">
        <div
          className="px-4 mx-auto"
          style={{
            maxWidth: '550px',
          }}
        >
          <div>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </header>
            </div>
          </div>

          <div
            className="p-3 rounded-lg mt-1 title"
            style={{ backgroundColor: '#313134' }}
          >
            <p>Hello, I'm an front-end developer in Vietnam!</p>
          </div>

          <div className="flex justify-between items-center mt-6">
            <div className="profile">
              <h2 className="text-4xl font-semibold">Vuong Quang Ninh</h2>
              <p className="mt-1">Front-end Developer ( ReactJS )</p>
            </div>
            <div className="avatar">
              <div
                className="border-white border-2 rounded-full"
                style={{ width: '120px', height: '120px' }}
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
              className="text-start text-xl font-bold border-b-4"
              style={{ width: 'calc(100% - 90%)', borderColor: '#525252' }}
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
                to={'/about'}
                className="btn flex items-center justify-center mx-auto px-4 py-2 text-black font-semibold rounded-lg mt-4"
                style={{
                  width: 'calc(100% - 70%)',
                  backgroundColor: '#81e6d9',
                }}
              >
                About me
                <HiChevronRight className="ml-2 mt-1" />
              </Link>
            </div>
          </div>

          <div className="mt-4">
            <h3
              className="text-start text-xl font-bold border-b-4"
              style={{ width: 'calc(100% - 94%)', borderColor: '#525252' }}
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
                className="flex items-center text-start text-xl font-bold border-b-4"
                style={{ width: 'calc(100% - 93%)', borderColor: '#525252' }}
              >
                I <FaHeart className="ml-2 text-lg" />
              </h3>
              <p className="text-justify indent-6 mt-2">
                Art, Music, Dancing, Playing Soccer, Basketball, Jogging,
                Machine Learning
              </p>
            </div>

            <div>
              <h3
                className="items-center text-start text-xl font-bold border-b-4"
                style={{ width: 'calc(100% - 79%)', borderColor: '#525252' }}
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
                className="items-center text-start text-xl font-bold border-b-4"
                style={{ width: 'calc(100% - 80%)', borderColor: '#525252' }}
              >
                Newsletter
              </h3>
              <p className="text-justify mt-2">Contact with me</p>
              <a
                href="#"
                className="btn flex items-center justify-center mx-auto px-4 py-2 text-black font-semibold rounded-lg mt-4"
                style={{
                  width: 'calc(100% - 54%)',
                  backgroundColor: '#81e6d9',
                }}
              >
                <span className="btn-text flex items-center justify-center">
                  <AiFillMail className="mr-2" />
                  Send me newletters here
                </span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default HomePage;
