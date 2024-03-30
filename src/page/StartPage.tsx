import { useState } from "react";
import Input from "../components/Input";
import QRCode from "react-qr-code";
import Button from "../components/Button";
import Title from "../components/Title";
import Description from "../components/Description";

interface Props {
  qrData: string;
  setQrData: React.Dispatch<React.SetStateAction<string>>;
  outputValue: string;
  setOutputValue: React.Dispatch<React.SetStateAction<string>>;
  turnPage: () => void;
}
function StartPage(props: Props) {
  const [isInput, setIsInput] = useState(false);
  const [isUrl, setIsUrl] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isValidUrl = (url: string) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!pattern.test(url);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    props.setQrData(value);
    setIsInput(value.trim() === "");
    setIsUrl(isValidUrl(value));
    setIsUrl(false);
    setIsInput(false);
  };

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);

      if (props.qrData.trim() === "") {
        setIsInput(true);
        props.setOutputValue("");
      } else if (!isValidUrl(props.qrData)) {
        setIsUrl(true);
        props.setOutputValue(props.qrData);
      } else {
        setIsInput(false);
        setIsUrl(true);
        props.setOutputValue(props.qrData);
        props.turnPage();
      }
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500  flex flex-col justify-center items-center w-full h-screen ">
      <div className="bg-white border-2 md:w-[300px]">
        <div className="m-5 flex items-center justify-center">
          <QRCode
            className="bg-blue-500 p-10 w-full"
            value=""
            fgColor="white"
            bgColor="rgb(59 130 246)"
          />
        </div>
        <div className="flex flex-col justify-center items-center m-5">
          <Title title="QR Converter"/>
          <Description description="Enter your link below and press the button to generate your QR code"/>
          <Input
            value={props.qrData}
            onChange={handleChange}
            isInput={isInput}
            isUrl={isUrl}
          />
          <Button
            title="Create QR"
            isLoading={isLoading}
            onClick={handleButtonClick}
          />
        </div>
      </div>
    </div>
  );
}

export default StartPage;
