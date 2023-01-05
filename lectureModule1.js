//импортирую и вызываю
// const currentMonth = require("./date").getCurrentMonth();

// не импортирую, а вызываю, сохраниться не функция, а результат ее выполнения
const currentMonth = require('./date/getCurrentMonth')();

//либо так, сохраняем результат работы
// const user = new require("./user");