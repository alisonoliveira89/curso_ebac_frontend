document.addEventListener("DOMContentLoaded", function () {
  const avatarProfile = document.querySelector("#avatar");
  const nameProfile = document.querySelector("#name");
  const userNameProfile = document.querySelector("#username");
  const repositoriesProfile = document.querySelector("#repositories");
  const followersProfile = document.querySelector("#followers");
  const followinsProfile = document.querySelector("#following");
  const linkProfile = document.querySelector(".profile-link");
  const urlApi = "https://api.github.com/users/alisonoliveira89";

  fetch(urlApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      avatarProfile.src = json.avatar_url;
      nameProfile.innerText = json.name;
      userNameProfile.innerText = json.login;
      repositoriesProfile.innerText = json.public_repos;
      followersProfile.innerText = json.followers;
      followinsProfile.innerText = json.following;
      linkProfile.href = json.html_url;
    });
});
