import ToastView, { toastSections } from '~/views/feedback/toast';

export default function ToastRoute() {
  return <ToastView />;
}


export const handle = {
  sections: toastSections,
};