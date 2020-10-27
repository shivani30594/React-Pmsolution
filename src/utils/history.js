import routesData from "../routes";

let _routes = {};
routesData.forEach(({ path, title }) => {
  path = path.substr(1).split("/")["0"];
  if (path === "") return;
  _routes = { ..._routes, [path]: title };
});

const getHistory = () => JSON.parse(sessionStorage.getItem("_history")) || [];

const hashChange = () => {
  let _history = getHistory();
  const hash = window.location.hash.substr(2);
  const path = hash.split("/")["0"];
  if (path === "") return;
  const pos = _history.indexOf(hash);
  pos > -1 && _history.splice(pos, 1);
  _history.push(hash);
  _history.length > 5 && _history.splice(0, 1);
  sessionStorage.setItem("_history", JSON.stringify(_history));
};

window.addEventListener("load", hashChange, false);
window.addEventListener("hashchange", hashChange, false);

const _history = { _routes, getHistory };

export default _history;
