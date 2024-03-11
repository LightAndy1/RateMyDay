import "./App.css";

function App() {
  const date = new Date();
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  for (let i = 0; i < daysInMonth; i++) {
    const day = document.createElement("div");
    day.classList.add("day");
    const dayNumber = document.createElement("span");
    dayNumber.textContent = i + 1;
    day.appendChild(dayNumber);
    document.body.appendChild(day);
  }

  return <></>;
}

export default App;
