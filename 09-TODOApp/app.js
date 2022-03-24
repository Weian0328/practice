// 程式碼寫這裡
const taskInput = document.querySelector("#taskInput")
const addBtn = document.querySelector("#addBtn")
const ul = document.querySelector(".todo-list")
// console.log(taskInput)
// console.log(addBtn)
// console.log(ul)

addBtn.addEventListener("click", function () {
  const addbutton = taskInput.value
  //   console.log(addbutton)
  const li = document.createElement("li")
  li.className = "todo-item"

  const span = document.createElement("span")
  span.className = "item"
  li.appendChild(span)

  const closebutton = document.createElement("button")
  closebutton.className = "closeBtn"
  li.appendChild(closebutton)
  //   console.log(li)

  span.textContent = addbutton
  closebutton.textContent = "X"
  ul.insertAdjacentElement("afterbegin", li)

  closebutton.addEventListener("click", function () {
    // console.log(closebutton)
    // closebutton.remove()
    closebutton.parentElement.remove()
  })
  document.querySelector("#taskInput").value = ""
})
taskInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    document.querySelector("#addBtn").click()
  }
})
