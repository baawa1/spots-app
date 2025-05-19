const likeIcon = new URL("../assets/like-icon.png", import.meta.url).href;

const GridImage = ({ id, title, img }) => {
  return (
    <figure key={id} className="flex flex-col gap-2.5">
      <img src={img} alt={title} className="w-full mb-2.5" />
      <figcaption className="flex justify-between items-center">
        <p className="text-[20px] align-top">{title}</p>
        <img src={likeIcon} alt="Like this spot" className="h-5 w-fit" />
      </figcaption>
    </figure>
  );
};

export default GridImage;
