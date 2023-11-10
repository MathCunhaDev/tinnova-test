import { ToastContainer, toast, ToastOptions } from "react-toastify";

const options: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const normal = (message: string) => toast(message, options);

const success = (message: string) => toast.success(message, options);

const dark = (message: string) => toast.dark(message, options);

const error = (message: string) => toast.error(message, options);

const info = (message: string) => toast.info(message, options);

const warn = (message: string) => toast.warn(message, options);

const notificationService = {
  success,
  error,
  info,
  warn,
  normal,
  dark,
};

export { ToastContainer, notificationService };
