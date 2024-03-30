import QRCode from "react-qr-code";
import Title from "../components/Title";
import Description from "../components/Description";

interface Props {
  outputValue: string;
}

function QRViewPage(props: Props) {
    
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col justify-center items-center w-full h-screen ">
      <div className="bg-white border-2 md:w-[300px]">
        <div className="m-5 flex items-center justify-center">
          <QRCode
            className="bg-blue-500 p-10 w-full"
            value={props.outputValue}
            fgColor="white"
            bgColor="rgb(59 130 246)"
          />
        </div>
        <div className="flex flex-col justify-center items-center m-5">
            <Title title="Improve your front-end skills by building projects"/>
            <Description description="Scan th QR code to visit Frontend Mentor and take your coding skills to the next level"/>
        </div>
      </div>
    </div>
  );
}

export default QRViewPage;
