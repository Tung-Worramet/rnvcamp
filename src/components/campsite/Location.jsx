const Location = ({ campsiteData }) => {
  const lat = campsiteData?.Location?.split(",")[0];
  const lng = campsiteData?.Location?.split(",")[1];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Location</h3>
      <div className="bg-gray-200 h-64 rounded-lg overflow-hidden">
        {lat && lng ? (
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
          ></iframe>
        ) : (
          <p className="text-gray-600 flex items-center justify-center h-full">
            No location provided
          </p>
        )}
      </div>
      <p className="text-sm text-gray-600 mt-2">
        To respect the Host's privacy, the precise address of this land will be
        provided after booking.
      </p>
    </div>
  );
};

export default Location;
