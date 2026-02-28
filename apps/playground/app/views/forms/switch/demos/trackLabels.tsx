import { Switch } from "@ninna-ui/forms";

export default function TrackLabels() {
  return (
    <div className="flex flex-col gap-4">
      <Switch 
        label="Power" 
        trackLabels={{ on: "ON", off: "OFF" }} 
        defaultChecked 
      />
      <Switch 
        label="Status" 
        trackLabels={{ on: "1", off: "0" }} 
      />
      <Switch 
        label="Mode" 
        trackLabels={{ on: "Y", off: "N" }} 
        defaultChecked 
      />
    </div>
  );
}
