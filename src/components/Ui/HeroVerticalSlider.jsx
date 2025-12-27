const VerticalAutoSlider = ({ images }) => {
  return (
    <div className="h-180 overflow-hidden">
      <div className="flex flex-col gap-6 animate-vertical-scroll">
        {[...images, ...images].map((src, i) => (
          <div key={i} className=" overflow-hidden">
            <img src={src.src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalAutoSlider;
