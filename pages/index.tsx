import styles from "../styles/Home.module.css";
var Govee = require("govee-api-wrapper");

var Lamp = new Govee({
  apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
  mac: "1d:e7:7c:a6:b0:13:b8:e9",
  model: "H6003",
});

var Desk = new Govee({
  apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
  mac: "75:b5:7c:a6:b0:13:ba:9e",
  model: "H6003",
});

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen grid grid-cols-4 gap-4">
      <div className="grid grid-cols-2 gap-4">
        <h1>Lamp</h1>
        <button
          className="rounded-md bg-white text-black w-20 max-h-20"
          onClick={() => Lamp.turnOn()}
        >
          Turn On
        </button>
        <button
          className="rounded-md bg-white text-black w-20 max-h-20"
          onClick={() => Lamp.turnOff()}
        >
          Turn Off
        </button>
      </div>
    </div>
  );
}
