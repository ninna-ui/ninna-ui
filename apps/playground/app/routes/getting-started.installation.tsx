import InstallationView, { installationSections } from "~/views/getting-started/installation";

export default function Installation() {
  return <InstallationView />;
}


export const handle = {
  sections: installationSections,
};