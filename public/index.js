window.onscroll = () => {
  const nav = document.querySelector("#thisisnav");
  if (this.scrollY <= 5) nav.className = "";
  else nav.className = "mynav";
};
