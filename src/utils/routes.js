import github from "../data/github";

const prefix = process.env.NODE_ENV === "development" ? "/" : github.prefix;

function route(path) {
  return `${prefix}${path}`;
}

const routes = {
  about: route(""),
  rerolls: route("rerolls")
};

export default routes;
