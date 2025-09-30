const HeroImageGallery = ({ campsiteData }) => {
  return (
    <div className="mb-12">
      <div className="grid grid-cols-4 gap-2 h-96">
        <div className="col-span-2 row-span-2">
          <img
            src={campsiteData?.ImageList[0]}
            alt="Main campground view"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
        <div className="grid grid-cols-2 col-span-2 gap-2">
          {campsiteData?.ImageList.slice(1, 5).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Campground view ${index + 2}`}
              className={`w-full h-full object-cover ${
                index === 1 || index === 3 ? "rounded-r-lg" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default HeroImageGallery;
