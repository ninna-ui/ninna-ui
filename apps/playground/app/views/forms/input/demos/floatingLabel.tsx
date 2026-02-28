import { Input } from "@ninna-ui/forms";

export default function FloatingLabel() {
  return (
    <div className="flex flex-col gap-6 w-64 pt-4">
      <Input floatingLabel="Email Address" type="email" />
      <Input floatingLabel="Password" type="password" />
      <Input floatingLabel="Username" defaultValue="johndoe" />
    </div>
  );
}
