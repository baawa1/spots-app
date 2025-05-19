import logo from "./assets/Logo.svg";
import avatar from "./assets/Avatar.png";
import editIcon from "./assets/Group 2.svg";
import newIcon from "./assets/Group 26.svg";
import GridImage from "./components/GridImage";

const spotsContents = [
  {
    id: 1,
    title: "Val Thorens",
    img: new URL("./assets/spotsImages/mask-group.png", import.meta.url).href,
  },
  {
    id: 2,
    title: "Restaurant terrace",
    img: new URL("./assets/spotsImages/mask-group-2.png", import.meta.url).href,
  },
  {
    id: 3,
    title: "An outdoor cafe",
    img: new URL("./assets/spotsImages/mask-group-3.png", import.meta.url).href,
  },
  {
    id: 4,
    title: "A very long bridge, over the forest...",
    img: new URL("./assets/spotsImages/mask-group-4.png", import.meta.url).href,
  },
  {
    id: 5,
    title: "Tunnel with morning light",
    img: new URL("./assets/spotsImages/mask-group-5.png", import.meta.url).href,
  },
  {
    id: 6,
    title: "Tunnel with morning light",
    img: new URL("./assets/spotsImages/mask-group-6.png", import.meta.url).href,
  },
];

function App() {
  return (
    <>
      <div>
        <header>
          <nav className="py-2.5 px-8 flex justify-center items-center bg-white">
            <img src={logo} className="h-[26px]" alt="Spots logo" />
          </nav>
        </header>
        <main className="bg-[#FCF5E5]">
          <section className="relative max-w-7xl mx-auto pt-[34px] px-8">
            <div className="relative pb-5">
              <div className="flex md:flex-row flex-col items-center md:justify-between gap-8">
                <div className="flex md:flex-row flex-col justify-center items-center md:items-stretch text-center md:text-left gap-x-5">
                  <img
                    src={avatar}
                    alt="Profile picture of Bessie Coleman"
                    className="md:w-[190px] w-full"
                  />

                  <div className="flex flex-col justify-between">
                    <div>
                      <h1 className="text-4xl font-medium">Bessie Coleman</h1>
                      <p>Civil Aviator</p>
                    </div>
                    <button className="flex gap-2 items-center md:justify-normal justify-center mt-8">
                      <img src={editIcon} alt="Edit profile button" />
                      <span>Edit Profile</span>
                    </button>
                  </div>
                </div>
                <div className="flex align-bottom md:self-end w-full md:w-44 justify-end">
                  <button className="bg-[#212121] text-white flex flex-row justify-center gap-2 py-4 rounded-lg md:w-40 w-full">
                    <img src={newIcon} alt="New product icon" />
                    <span>New Product</span>
                  </button>
                </div>
              </div>
              <div className="absolute bottom-0 w-full border-b border-[#21212166] border-opacity-[40%]"></div>
            </div>
          </section>
          <section className="max-w-7xl mx-auto pt-2.5 px-8">
            <div className="relative pb-10">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-5 gap-y-10">
                {spotsContents.map(({ id, title, img }) => (
                  <GridImage title={title} img={img} id={id} />
                ))}
              </div>
              <div className="absolute bottom-0 w-full max-w-[76rem] border-b border-[#21212166] border-opacity-[40%]"></div>
            </div>
          </section>
          <footer className="h-32 flex items-center justify-center">
            <p className="text-center">2023 © Spots</p>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
