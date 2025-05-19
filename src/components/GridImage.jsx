const likeIcon = new URL("../assets/like-icon.png", import.meta.url).href;

const GridImage = ({ key, title, img }) => {
  return (
    <div key={key}>
      <img src={img} alt={title} className="w-full mb-2.5" />
      <div className="flex justify-between items-center">
        <p className="text-[20px] align-top">{title}</p>
        <img src={likeIcon} alt="Like Icon" className="h-5 w-fit" />
      </div>
    </div>
  );
};

export default GridImage;
