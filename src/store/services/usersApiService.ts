import { HttpService } from "./httpService";

const basePath = "/users";

export const usersApiService = {
  getAll,
};

async function getAll() {
  return HttpService.get(basePath);
}
