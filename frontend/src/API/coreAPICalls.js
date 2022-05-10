export const fetchCoinDataFromDB = () => {
    return fetch(`/api/fetch-coins-from-db`, { method: "GET" })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
}