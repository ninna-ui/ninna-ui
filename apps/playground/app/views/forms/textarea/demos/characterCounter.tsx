import { Textarea } from "@ninna-ui/forms";

export default function CharacterCounter() {
  return (
    <div className="flex flex-col gap-4 w-80">
      <div>
        <span className="text-sm text-base-content/70 mb-1 block">Max 100 characters</span>
        <Textarea 
          placeholder="Type here..." 
          maxLength={100} 
          showCounter 
        />
      </div>
      <div>
        <span className="text-sm text-base-content/70 mb-1 block">Max 250 characters</span>
        <Textarea 
          placeholder="Write your message..." 
          maxLength={250} 
          showCounter 
          defaultValue="This textarea shows a character counter"
        />
      </div>
    </div>
  );
}
