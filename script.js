window.addEventListener("load", checkCon);

function checkCon() {
  let status = document.getElementById("Status");
  let ip = document.getElementById("Ip");
  let NS = document.getElementById("NS");
  status.textContent = "Checking....";
  if (navigator.onLine) {
    fetch("https://api.ipify.org/?format=json")
      .then((response) => response.json())
      .then((data) => {
        ip.textContent = data.ip;
        status.textContent = "Connected";
        const connection = navigator.connection;

        const ns = connection ? connection.downlink + "Mbps" : "unknown";
        NS.textContent = ns;
      })
      .catch(() => {
        status.textContent = "Disconnected";
        ip.textContent = "-";
        NS.textContent = "-";
      });
  } else {
    status.textContent = "Disconnected";
    ip.textContent = "-";
    NS.textContent = "-";
  }
}
