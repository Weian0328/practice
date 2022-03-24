// 程式碼寫在這裡
document.addEventListener("DOMContentLoaded", function () {
  const minus = document.querySelector("#minus")
  const plus = document.querySelector("#plus")
  const num = document.querySelector("#counter")
  minus.addEventListener("click", function () {
    if (num.value > 0) {
      num.value--
    }
  })
  plus.addEventListener("click", function () {
    num.value++
  })
})
