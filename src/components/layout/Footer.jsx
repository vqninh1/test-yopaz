import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = ({}) => {
  return (
    <div className="" style={{ color: '#444447' }}>
      <div className="container mx-auto">
        <div
          className="block md:flex h-16 justify-between text-center items-center text-lg mx-6"
          style={{}}
        >
          <div className="flex items-center justify-center mb-2">
            <a href="#" className="text-3xl pr-6">
              <FaFacebook />
            </a>
            <a href="#" className="text-3xl pr-6">
              <FaInstagram />
            </a>
            <a href="#" className="text-3xl pr-6">
              <FaTwitter />
            </a>
            <a href="#" className="text-3xl pr-6">
              <FaGithub />
            </a>
          </div>

          <div>
            <p className="">2023 Vuong Quang Ninh</p>
          </div>

          <div>
            <h3 className="">vuongquangninh0811@gmail.com</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
