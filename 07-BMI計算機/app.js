// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方
const height = document.querySelector("#bodyHeight")
const weight = document.querySelector("#bodyWeight")
const button = document.querySelector("button")
const result = document.querySelector("#resultText")

button.addEventListener("click", function () {
  let h = height.value / 100
  let w = weight.value
  let bmi = w / (h * h)
  result.textContent = bmi.toFixed(2)
})
