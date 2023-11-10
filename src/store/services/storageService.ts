import { IUser } from "~models/IUsersListing";

export const storageService = {
  setStorage,
  getStorage,
  hasStorage,
};

function setStorage(name: string, data: IUser[]): void {
  localStorage.setItem(name, JSON.stringify(data));
}

function getStorage(name: string) {
  const data = localStorage.getItem(name) || "{}";
  const dataParsed = JSON.parse(data);
  return dataParsed;
}

function hasStorage(name: string) {
  const dataUser = localStorage.getItem(name) || "{}";

  if (dataUser !== "{}") return true;
  if (dataUser === "{}") return false;
}
