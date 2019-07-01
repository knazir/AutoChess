function route(path) {
  return `${process.env.PUBLIC_URL || ""}/${path}`;
}

const routes = {
  items: route(""),
  about: route("about")
};

export default routes;
