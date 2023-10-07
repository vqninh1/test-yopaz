import img1 from './img_portfolio/amembo_eyecatch.webp';
import img2 from './img_portfolio/freedbtagger_eyecatch.webp';
import img3 from './img_portfolio/inkdrop_eyecatch.webp';
import img4 from './img_portfolio/margelo_eyecatch.webp';
import img5 from './img_portfolio/menkiki_eyecatch.webp';
import img6 from './img_portfolio/modetokyo_eyecatch.webp';
import img7 from './img_portfolio/pichu2_eyecatch.webp';
import img8 from './img_portfolio/styly_eyecatch.webp';
import img9 from './img_portfolio/the-four-painters_eyecatch.webp';
import img10 from './img_portfolio/walknote_eyecatch.webp';

const Portfolio = () => {
  return (
    <div>
      <div className="container min-w-full md:min-w-fit container mx-auto text-center mt-6 text-white">
        <article>
          <div className="max-w-xl md:w-4/6 lg:w-3/6 xl:w-2/6 mx-auto px-4">
            <div
              className="p-3 rounded-lg mt-1 title font-semibold"
              style={{ backgroundColor: '#313134' }}
            >
              <p>Portfolio</p>
            </div>
            <div className="items-border mt-4 pb-14 border-b border-gray-100">
              <h3 className="w-fit text-start text-xl font-bold">Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="mb-4">
                  <img
                    className="rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-lg shadow-black-500/50"
                    src={img3}
                    alt=""
                  />
                  <p className="text-lg mt-2">Inkdrop</p>
                  <p className="text-sm">
                    A Markdown note-taking app with 100+ plugins, cross-platform
                    and encrypted data sync support
                  </p>
                </div>
                <div className="...">
                  <img
                    className="rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-lg shadow-black-500/50"
                    src={img10}
                    alt=""
                  />
                  <p className="text-lg mt-2">walknote</p>
                  <p className="text-sm">Music recommendation app for iOS</p>
                </div>
                <div className="...">
                  <img
                    className="rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-lg shadow-black-500/50"
                    src={img9}
                    alt=""
                  />
                  <p className="text-lg mt-2">The four painters</p>
                  <p className="text-sm">
                    A video work generated with deep learning, imitating famous
                    four painters like Van Gogh
                  </p>
                </div>
                <div className="...">
                  <img
                    className="rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-lg shadow-black-500/50"
                    src={img5}
                    alt=""
                  />
                  <p className="text-lg mt-2">Menkiki</p>
                  <p className="text-sm">
                    An app that suggests ramen(noodle) shops based on a given
                    photo of the ramen you want to eat
                  </p>
                </div>
              </div>
            </div>

            <div className="items-border mt-4 pb-14 border-b border-gray-100">
              <h3 className="w-fit text-start text-xl font-bold">
                Collaborations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="mb-4">
                  <img
                    className="rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-lg shadow-black-500/50"
                    src={img4}
                    alt=""
                  />
                  <p className="text-lg mt-2">Margelo</p>
                  <p className="text-sm">
                    A website of the elite app development and contracting
                    agency based in Austria
                  </p>
                </div>
                <div className="...">
                  <img
                    className="rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-lg shadow-black-500/50"
                    src={img6}
                    alt=""
                  />
                  <p className="text-lg mt-2">mode.tokyo</p>
                  <p className="text-sm">
                    The mode magazine for understanding to personally enjoy
                    Japan
                  </p>
                </div>
                <div className="...">
                  <img
                    className="rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-lg shadow-black-500/50"
                    src={img8}
                    alt=""
                  />
                  <p className="text-lg mt-2">Styly</p>
                  <p className="text-sm">
                    A VR Creative tools for fashion brands
                  </p>
                </div>
              </div>
            </div>

            <div className="items-border mt-4 pb-4">
              <h3 className="w-fit text-start text-xl font-bold">Old works</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="mb-4">
                  <img
                    className="rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-lg shadow-black-500/50"
                    src={img7}
                    alt=""
                  />
                  <p className="text-lg mt-2">Pichu*Pichu</p>
                  <p className="text-sm">
                    Twitter client app for iPhone Safari
                  </p>
                </div>
                <div className="...">
                  <img
                    className="rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-lg shadow-black-500/50"
                    src={img2}
                    alt=""
                  />
                  <p className="text-lg mt-2">freeDBTagger</p>
                  <p className="text-sm">
                    Automatic audio file tagging tool using FreeDB for Windows
                  </p>
                </div>
                <div className="...">
                  <img
                    className="rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-lg shadow-black-500/50"
                    src={img1}
                    alt=""
                  />
                  <p className="text-lg mt-2">Amembo</p>
                  <p className="text-sm">
                    P2P private file sharing tool with MSN Messenger integration
                    for Windows
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Portfolio;
