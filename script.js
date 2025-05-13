fetch('https://api.football-data.org/v4/matches?status=LIVE', {
  headers: {
    'X-Auth-Token': '4ae8cfd73f33488da18840c5fb3f6abd'
  }
})
.then(response => response.json())
.then(data => {
  const matches = data.matches;
  const scoresDiv = document.getElementById('scores');
  matches.forEach(match => {
    const team1 = match.homeTeam.name;
    const team2 = match.awayTeam.name;
    const score1 = match.score.fullTime.home;
    const score2 = match.score.fullTime.away;
    scoresDiv.innerHTML += `<p>${team1} ${score1} - ${score2} ${team2}</p>`;
  });
});