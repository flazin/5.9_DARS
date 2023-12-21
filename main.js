fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => renderUsers(data));

function renderUsers(users) {
  let html = "";
  users.forEach((user) => (html += <h2>${user.name}</h2>));
  document.querySelector(".container").innerHTML = html;
}
