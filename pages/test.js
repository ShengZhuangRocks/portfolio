import Image from "next/image";

function Test() {
  return (
    <>
      <Image
        src="/../public/static/graffetti.jpg"
        alt="Picture of the author"
        width={600}
        height={400}
        layout="intrinsic"
      />
    </>
  );
}

export default Test;
