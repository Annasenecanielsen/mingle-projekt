const id = new URLSearchParams(window.location.search).get("id");
const endpoint = `https://dummyjson.com/users/${id}`;
const userdetails = document.querySelector(".userdetails");

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => {
    visData(data);
  });
function visData(user) {
  userdetails.innerHTML = `
    <article class="profile-card">
      <div class="profile-heading">
        <p class="profile-label">YOUR POTENTIAL MATCH</p>
        <h2>${user.firstName} ${user.lastName}</h2>
        <p>${user.age} years old · ${user.address.city}</p>
      </div>
      <div class="profile-information">
        <h3>Get to Know Me</h3>
        <div class="profile-row">
          <span>Gender</span>
          <p>${user.gender}</p>
        </div>
        <div class="profile-row">
          <span>Age</span>
          <p>${user.age} years</p>
        </div>
        <div class="profile-row">
          <span>Eye Color</span>
          <p>${user.eyeColor}</p>
        </div>
        <div class="profile-row">
          <span>Hair Color</span>
          <p>${user.hair.color}</p>
        </div>
        <div class="profile-row">
          <span>Height</span>
          <p>${Math.round(user.height)} cm</p>
        </div>
        <div class="profile-row">
          <span>State</span>
          <p>${user.address.state}</p>
        </div>
        <div class="profile-row">
          <span>City</span>
          <p>${user.address.city}</p>
        </div>
        <div class="profile-row">
          <span>Education</span>
          <p>${user.university}</p>
        </div>
      </div>
      <div class="profile-bottom">
        <h3>Curious to know more?</h3>
        <p>Real connections begin beyond appearances.</p>
        <a href="userlist.html" class="back-button">Explore More Matches</a>
      </div>
    </article>`;
}
