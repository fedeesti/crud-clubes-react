export default function getTeams() {
  return fetch(`/api/v1/teams`).then((res) => res.json);
}
