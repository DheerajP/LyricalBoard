import _ from "lodash";
import Image from "next/image";
const ImageComponent = (props) => {
  console.log(props);
  // const id = _.get(props, "id");
   const image = _.get(props, "image");
  // const imgUrl = _.get(image, "fields.file.url");
  // const imgAltText = _.get(image, "fields.title");

  if (!image) {
    return "";
  }
  return (
    <>
      <div className="w-[400px]x overflow-hidden">
        <Image
          src={`${image.url}?w=500&h=500`}
          // width={1920}
          // height={1080}
          width={500}
          height={500}
          layout="responsive"
          alt="test"
        />
      </div>

      <div className="">{/* <img className="" src={imgUrl} alt={""} /> */}</div>
    </>
  );
};

export default ImageComponent;
