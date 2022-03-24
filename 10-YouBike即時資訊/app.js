// 程式碼寫這裡
const API =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

const searchKeyword = document.querySelector("#searchKeyword")
const button = document.querySelector(".btn")
const ul = document.querySelector(".siteList")

async function getStations(value) {
  const rawData = await fetch(API)
  const stations = await rawData.json()
  const filteredData = stations.filter((station) => station.ar.includes(value))
  return filteredData
}

button.addEventListener("click", (e) => {
  e.preventDefault()
  let filteredData = getStations(searchKeyword.value)
  filteredData.then((data) => {
    data.forEach((station) => {
      generateElement(station)
    })
  })
})

const generateElement = (data) => {
  const ar = data.ar
  const sna = data.sna.replace(/YouBike2.0_/i, "")
  const sbi = data.sbi
  const li = document.createElement("li")
  li.className = "list-group-item fs-5"
  li.textContent = `${sna} (${sbi})`

  const bike = document.createElement("i")
  bike.className = "fas fa-bicycle"
  li.insertAdjacentElement("afterbegin", bike)

  const br = document.createElement("br")
  li.appendChild(br)

  const small = document.createElement("small")
  small.className = "text-muted"
  small.textContent = ar
  li.appendChild(small)
  ul.insertAdjacentElement("afterbegin", li)
}
