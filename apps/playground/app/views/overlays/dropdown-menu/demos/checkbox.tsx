import { useReducer } from "react";
import { DropdownMenu } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

type ViewState = {
  sidebar: boolean;
  toolbar: boolean;
  statusBar: boolean;
  lineNumbers: boolean;
  wordWrap: boolean;
};

type ViewAction = { type: keyof ViewState; value: boolean };

function viewReducer(state: ViewState, action: ViewAction): ViewState {
  return { ...state, [action.type]: action.value };
}

const INITIAL_VIEW_STATE: ViewState = {
  sidebar: true,
  toolbar: true,
  statusBar: false,
  lineNumbers: true,
  wordWrap: false,
};

export default function DropdownMenuCheckbox() {
  const [view, dispatch] = useReducer(viewReducer, INITIAL_VIEW_STATE);

  const toggle = (key: keyof ViewState) => (value: boolean) =>
    dispatch({ type: key, value });

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline" size="sm">View Options</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>Visibility</DropdownMenu.Label>
        <DropdownMenu.CheckboxItem checked={view.sidebar} onCheckedChange={toggle('sidebar')}>Sidebar</DropdownMenu.CheckboxItem>
        <DropdownMenu.CheckboxItem checked={view.toolbar} onCheckedChange={toggle('toolbar')}>Toolbar</DropdownMenu.CheckboxItem>
        <DropdownMenu.CheckboxItem checked={view.statusBar} onCheckedChange={toggle('statusBar')}>Status Bar</DropdownMenu.CheckboxItem>
        <DropdownMenu.Separator />
        <DropdownMenu.CheckboxItem checked={view.lineNumbers} onCheckedChange={toggle('lineNumbers')}>Line Numbers</DropdownMenu.CheckboxItem>
        <DropdownMenu.CheckboxItem checked={view.wordWrap} onCheckedChange={toggle('wordWrap')}>Word Wrap</DropdownMenu.CheckboxItem>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
