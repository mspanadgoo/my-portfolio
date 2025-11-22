import { data as fullstack } from "./fullstack";
import { data as ios } from "./ios";
import { data as backend } from "./backend";
import { data as frontend } from "./frontend";

const profiles = {
  fullstack,
  ios,
  backend,
  frontend,
};

export const getProfile = (role = "fullstack") => {
  return profiles[role] || profiles["fullstack"];
};
