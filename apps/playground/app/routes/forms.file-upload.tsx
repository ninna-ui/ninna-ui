import FileUploadView, { fileUploadSections } from "~/views/forms/file-upload";

export default function FileUploadRoute() {
  return <FileUploadView />;
}


export const handle = {
  sections: fileUploadSections,
};