const HeroImageGallery = ({ campervanData }) => {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 h-80 md:h-[500px]">
        <div className="col-span-1 md:col-span-2 md:row-span-2">
          <img
            src={campervanData?.ImageList[0]}
            alt="Main campervan view"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="hidden md:grid grid-cols-2 col-span-2 gap-3 h-full">
          {campervanData?.ImageList?.slice(1, 5).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Campervan view ${index + 2}`}
              className="w-full h-full object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-3 md:hidden">
        {campervanData?.ImageList?.slice(1, 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Campervan view ${index + 2}`}
            className="w-full h-40 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};
export default HeroImageGallery;
