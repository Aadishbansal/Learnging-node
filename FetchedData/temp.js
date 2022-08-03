function fetchdata() {
  fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let hmtl = data
        .map((x) => {
          return `<tr><td class="id">${x.No}</td>
           <td>${x.Team}</td>
           <td>${x.Matches}</td>
           <td>${x.Won}</td>
           <td>${x.Lost}</td>
           <td>${x.Tied}</td>
           <td>${x.NRR}</td>
           <td>${x.Points}</td></tr>`;
        })
        .join("");
      let tab = `<tr>
        <th>No</th>
        <th>Team</th>
        <th>Matches</th>
        <th>Won</th>
        <th>Lost</th>
        <th>Tied</th>
        <th>NRR</th>
        <th>Points</th>
    </tr>`;

      console.log(hmtl);

      console.log(data);

      document.querySelector("#tab").innerHTML = tab;
      document.querySelector("#info").innerHTML = hmtl;
    })
    .catch((err) => console.log(err.message));
}
fetchdata();
