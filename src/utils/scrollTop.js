export const scrollTop = () => {
  console.info("scrollTop");

  const appBody = document.querySelector(".app-body");
  if (appBody !== null) {
    try {
      appBody.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    } catch (e) {
      appBody.scrollTop = 0;
      appBody.scrollLeft = 0;
    }
  } else {
    setTimeout(scrollTop, 60);
  }
};

window.addEventListener("hashchange", scrollTop, false);
