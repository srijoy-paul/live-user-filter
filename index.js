let result = document.getElementsByClassName("filter_user")[0];
let search = document.querySelector("input");
let users = [];

search.focus();

async function getData() {
  const res = await fetch("https://randomuser.me/api/?results=50");
  //   console.log(res);
  let data = await res.json();
  let results = data.results;
  //   console.log(results.length);
  //   console.log(results[10].name.first);

  result.innerHTML = "";

  for (let i = 0; i < results.length; i++) {
    let li = document.createElement("li");
    users.push(li);
    li.innerHTML = `
      <img src="${results[i].picture.large}"></img>
      <div class="user-info">
      <h4>${results[i].name.first} ${results[i].name.last}</h4>
      <small>${results[i].location.city}, ${results[i].location.country}</small>
      </div>
      `;
    result.appendChild(li);
  }
}

getData();

search.addEventListener("input", function (e) {
  let search_input = e.target.value.trim();
  console.log(search_input);
  for (let indx = 0; indx < users.length; indx++) {
    // console.log(users[indx]);
    if (
      users[indx].innerText.toLowerCase().includes(search_input.toLowerCase())
    ) {
      users[indx].classList.remove("hide");
    } else {
      users[indx].classList.add("hide");
    }
  }
});
