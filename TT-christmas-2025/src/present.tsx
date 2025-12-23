type PresentProps = {
    present: string;
    image: string;
    onOpen: (image: string) => void;
  };
  
  const Present = ({ present, image, onOpen }: PresentProps) => {
    return (
      <div className="present-container">
        <img
          className="present-image-container"
          src={present}
          alt="Present"
          onClick={() => onOpen(image)}
          style={{ cursor: "pointer" }}
        />
      </div>
    );
  };
  
  export default Present;
  