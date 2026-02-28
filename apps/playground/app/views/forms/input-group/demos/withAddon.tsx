import { Input, InputAddon } from "@ninna-ui/forms";

export default function WithAddon() {
  return (
    <div className="flex flex-col gap-4 w-80">
      <div className="flex">
        <InputAddon placement="start">https://</InputAddon>
        <Input placeholder="example.com" className="rounded-l-none" />
      </div>
      <div className="flex">
        <Input placeholder="username" className="rounded-r-none" />
        <InputAddon placement="end">@gmail.com</InputAddon>
      </div>
      <div className="flex">
        <InputAddon placement="start">$</InputAddon>
        <Input placeholder="0.00" type="number" className="rounded-none" />
        <InputAddon placement="end">USD</InputAddon>
      </div>
    </div>
  );
}
