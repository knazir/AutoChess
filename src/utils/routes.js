function route(path) {
  return `${process.env.PUBLIC_URL || ""}/${path}`;
}

const routes = {
  about: route(""),
  rerolls: route("rerolls")
};

export default routes;
