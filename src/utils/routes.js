function route(path) {
  return `${process.env.PUBLIC_URL || ""}/${path}`;
}

const routes = {
  about: route(""),
  items: route("items")
};

export default routes;
