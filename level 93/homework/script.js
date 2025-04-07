const avatar = document.getElementById("avatar");
const form = document.getElementById("form");
const leftFirst = document.getElementById("left-first");
const rightFirst = document.getElementById("right-first");
const leftSecond = document.getElementById("left-second");
const centerSecond = document.getElementById("center-second");
const rightSecond = document.getElementById("right-second");
const lt = document.getElementById("lt");
const lt2 = document.getElementById("lt2");
const lr = document.getElementById("lr");
const lr2 = document.getElementById("lr2");
const second = document.getElementById("second");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const userName = form.elements.userName.value;

  try {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const res = await response.json();

    lt.style.display = "flex";
    lt2.style.display = "flex";
    lr.style.display = "flex";
    lr2.style.display = "flex";
    second.style.backgroundColor = "rgb(20, 29, 47)";

    const date = new Date(res.created_at);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const joined = date.toLocaleDateString('en-GB', options);

    avatar.innerHTML = `
      <img src="${res.avatar_url}" alt="user avatar" style="width: 70%; border-radius: 50%">
    `;

    leftFirst.innerHTML = `
      <h3 style="color: white; font-weight: 600">${res.name ? res.name : "Has no name"}</h3>
      <p style="font-size: 10px; margin-top: 4px; color: rgb(33, 80, 148); font-weight: 500">@${res.login}</p>
      <p style="font-size: 11px; margin-top: 12px; color: rgb(210, 219, 234); font-weight: 500">${res.bio ? res.bio : "This profile has no bio"}</p>
    `;

    rightFirst.innerHTML = `<p style="color: rgb(210, 219, 234); font-size: 9px; word-spacing: 5px; font-weight: 500">joined ${joined}</p>`;

    leftSecond.innerHTML = `
      <p style="color: rgb(210, 219, 234); font-size: 9px; font-weight: 500">Repos</p>
      <p style="color: white; font-weight: 600">${res.public_repos ? res.public_repos : "0"}</p>
    `;

    centerSecond.innerHTML = `
      <p style="color: rgb(210, 219, 234); font-size: 9px; font-weight: 500">Followers</p>
      <p style="color: white; font-weight: 600">${res.followers ? res.followers : "0"}</p>
    `;

    rightSecond.innerHTML = `
      <p style="color: rgb(210, 219, 234); font-size: 9px; font-weight: 500">Following</p>
      <p style="color: white; font-weight: 600">${res.following ? res.following : "0"}</p>
    `;

    lt.querySelector("p").textContent = res.location ? res.location : "Not Available";
    lt2.querySelector("p").textContent = res.blog ? res.blog : "Not Available";
    lr.querySelector("p").textContent = res.twitter_username ? res.twitter_username : "Not Available";
    lr2.querySelector("p").textContent = res.company ? res.company : "Not Available";

  } catch (err) {
    console.log(err);
    }
});
