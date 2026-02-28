import { FormControl, FormLabel, FormMessage, Input } from "@ninna-ui/forms";

export default function Basic() {
  return (
    <div className="flex flex-col gap-6 w-80">
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="you@example.com" />
        <FormMessage type="hint">We'll never share your email.</FormMessage>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Username</FormLabel>
        <Input placeholder="johndoe" />
      </FormControl>

      <FormControl isInvalid>
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="••••••••" />
        <FormMessage>Password must be at least 8 characters.</FormMessage>
      </FormControl>
    </div>
  );
}
