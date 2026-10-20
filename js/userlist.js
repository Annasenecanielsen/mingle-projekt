const endpoint = "https://dummyjson.com/users?limit=0";
const userliste = document.querySelector(".userliste");

document.querySelectorAll("#filtre button").forEach((knap) => knap.addEventListener("click", filtrer));
const visantal = document.querySelector("#visantal");

function filtrer(e) {
  const valgt = e.target.textContent;
  const kategori = e.target.dataset.kategori;

  if (valgt == "All") {
    udsnit = alleData;
  } else if (kategori == "eyeColor") {
    udsnit = alleData.filter((user) => user.eyeColor == valgt);
  } else if (kategori == "hairColor") {
    udsnit = alleData.filter((user) => user.hair.color == valgt);
  } else if (kategori == "state") {
    udsnit = alleData.filter((user) => user.address.state == valgt);
  } else if (kategori == "city") {
    udsnit = alleData.filter((user) => user.address.city == valgt);
  } else if (kategori == "gender") {
    udsnit = alleData.filter((user) => user.gender == valgt);
  } else if (kategori == "university") {
    udsnit = alleData.filter((user) => user.university == valgt);
  } else if (kategori == "age") {
    udsnit = alleData.filter((user) => user.age >= Number(valgt));
  } else if (kategori == "height") {
    udsnit = alleData.filter((user) => user.height >= Number(valgt));
  }
  visData(udsnit);
}
let alleData, udsnit;

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => {
    visData(data.users);
    alleData = udsnit = data.users;
  });

function visData(json) {
  visantal.textContent = json.length;
  userliste.innerHTML = "";
  json.forEach((user) => {
    userliste.innerHTML += `
      <a href="userdetails.html?id=${user.id}">
        <article class="card">
          <img src="${user.image}" alt="${user.firstName}">
          <h2>${user.firstName} ${user.lastName}</h2>
          <h3>${user.age} years old</h3>
          <p>${user.gender}</p>
          <p>${user.eyeColor} eyes</p>
          <p>${user.hair.color} hair</p>
          <p>${user.height} cm</p>
          <p>${user.address.state}</p>
          <p>${user.address.city}</p>
          <p>${user.university}</p>
        </article>
      </a>`;
  });
}
document.querySelectorAll("#sortering button").forEach((button) => button.addEventListener("click", sorter));
function sorter(e) {
  const valgt = e.target.textContent;
  if (valgt == "Age: Low to High") {
    udsnit.sort((a, b) => a.age - b.age);
  } else if (valgt == "Age: High to Low") {
    udsnit.sort((a, b) => b.age - a.age);
  } else if (valgt == "Height: Low to High") {
    udsnit.sort((a, b) => a.height - b.height);
  } else if (valgt == "Height: High to Low") {
    udsnit.sort((a, b) => b.height - a.height);
  } else if (valgt == "Name: A-Z") {
    udsnit.sort((a, b) => a.firstName.localeCompare(b.firstName));
  } else if (valgt == "Name: Z-A") {
    udsnit.sort((a, b) => b.firstName.localeCompare(a.firstName));
  }
  visData(udsnit);
}
