//Получаем элементы на странице
const taskInput = document.querySelector(".manager__task_input"); //поле ввода задачи
const taskButton = document.querySelector(".manager__task_button"); //кнопка "Добавить"
const listInput = document.querySelector(".manager__list_input"); //поле списка задач
const listButton = document.querySelector(".manager__list_button"); //кнопка "Очистить список задач"
const listItem = document.querySelector(".manager__list_item"); //блок списка задач

//добавляем обработчик события на кнопку "Добавить"
taskButton.addEventListener("click", () => {
  const oldInput = document.querySelector(".manager__list_input"); // получаем элемент с классом "manager__list_input"
  if (oldInput) {
    // проверяем, есть ли такой элемент вообще
    oldInput.remove(); // если есть, удаляем старый элемент перед добавлением нового
  }
  //добавляем задачу в список задач
  listItem.innerHTML += `<div class="manager__list_item_input"> 
    <p class="manager__list_item_text">
    ${taskInput.value}
    </p>  
    <label for="checkbox"> 
    <input class="manager__list_item_checkbox" type="checkbox" name="ready" id="checkbox">
    </label>
    </div> `;

  //очищаем поле ввода задачи
  taskInput.value = "";
  //изменяю стиль кнопки "Очистить список задач"
  listButton.style.backgroundColor = "rgb(158, 106, 207)";
});

//добавляем обработчик события на кнопку "Очистить список задач"
listButton.addEventListener("click", () => {
  //заменяем новый код старым
  listItem.innerHTML = ` <label for="manager__list_input">
  <input
    class="manager__list_input"
    type="text"
    id="manager__list_input"
    placeholder="Нет задач"
    disabled
  />
</label>`;

  //изменяю стиль кнопки "Очистить список задач"
  listButton.style.backgroundColor = "rgb(216, 216, 216)";
});
