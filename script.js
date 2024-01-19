async function getData(file) {
  const response = await fetch(file);
  const data = await response.json();
  setPiechart(data);
}

getData("https://u230654.gluwebsite.nl/infographic/activiteiten.php");

getData("http://localhost/infographic/activiteiten.php");

function setPiechart(data) {
  const canvas = document.getElementById("piechart").getContext("2d");
  const labels = data.map((object) => object.activiteit);
  const colors = data.map((object) => object.kleur);
  const hours = data.map((object) => object.uren);
  const pieces = data.map((object) => {
    const hoursInWeek = 7 * 24;
    const degreesInCircle = 360;
    const degreesPerHour = degreesInCircle / hoursInWeek;
    const degreesPerPiece = degreesPerHour * object.uren;
    return parseFloat(degreesPerPiece.toFixed(2));
  });

  new Chart(canvas, {
    type: "pie",
    responsive: false,
    data: {
      labels: labels,
      datasets: [
        {
          data: pieces,
          backgroundColor: colors,
          datalabels: {
            labels: hours,
          },
        },
      ],
    },
  });
}
