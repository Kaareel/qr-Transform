import { useState } from "react";
import StartPage from "./page/StartPage";
import QRViewPage from "./page/QRViewPage";

type Scoring = "startPage" | "qrviewpage";

function App() {
  const [qrData, setQrData] = useState("");
  const [view, setView] = useState<Scoring>("startPage");
  const [outputValue, setOutputValue] = useState("");
  

  const turnPage = () => {
    setView("qrviewpage");
  };
  return (
    <div>
      {view === "startPage" && <StartPage qrData={qrData} setQrData={setQrData} outputValue={outputValue} setOutputValue={setOutputValue} turnPage={turnPage}/>}
      {view === "qrviewpage" && <QRViewPage outputValue={outputValue}/>}
    </div>
  );
}

export default App;
