
// console.log('My %s has %d years', 'cat', 2)
// console.log('%o', Number)
// console.clear()
// const x = 1
// const y = 2
// const z = 3
// console.count(
// 	'The value of x is ' + x +
// 	' and has been checked .. how many times?'
// )
// console.count(
// 	'The value of x is ' + x +
// 	' and has been checked .. how many times?'
// )
// console.count(
// 	'The value of y is ' + y +
// 	' and has been checked .. how many times?'
// )
//-------------------------------------------
// const oranges = ['orange', 'orange']
// const apples = ['just one apple']
// oranges.forEach(fruit => {
// 	console.count(fruit)
// })
// apples.forEach(fruit => {
// 	console.count(fruit)
// })
//----------------------------------------------
// const function2 = () => console.trace()
// const function1 = () => function2()
// function1()
//----------------------------------------
// const doSomething = () => console.log('test')
// const measureDoingSomething = () => {
// 	console.time('doSomething()')

// 	//do something, and measure the time it takes
// 	doSomething()
// 	console.timeEnd('doSomething()')
// }
// measureDoingSomething()
//--------------------------------------
// console.log('\x1b[1;35m%s\x1b[0m', 'hi!', '------------')
// https://gist.github.com/iamnewton/8754917
//-------------------------------------npm install chalk
// const chalk = require('chalk')
// console.log(chalk.blue('hi!'))
//-----------------------------------npm install progress
// const ProgressBar = require('progress')

// const bar = new ProgressBar(':rate', { total: 10 })            //https://www.npmjs.com/package/progress
// const timer = setInterval(() => {
// 	bar.tick()
// 	if (bar.complete) {
// 		clearInterval(timer)
// 	}
// }, 100)
//------------------------------
//++ Принять ввод из командной строки в Node.js
// const readline = require('readline').createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// })

// readline.question(`What's your name?`, name => {
// 	console.log(`Hi ${name}!`)
// 	readline.close()
// })
//-----------------------------npm install inquirer
// const inquirer = require('inquirer')
// var questions = [
// 	{
// 		type: 'input',
// 		name: 'name',
// 		message: "What's your name?"
// 	}
// ]
// inquirer.prompt(questions).then(answers => {
// 	console.log(`Hi ${answers['name']}!`)
// })
//--------------------------------
//++Предоставление функциональности из файла Node.js с помощью экспорта
//**module.exports        и        exports */
//---назначить объект module.exports, который является объектом, изначально предоставленным модульной системой, и это сделает экспорт вашего файла только этим объектом
// const car = {
// 	brand: 'Ford',
// 	model: 'Fiesta'
// }
// module.exports = car
//---добавить экспортируемый объект как свойство exports. Этот способ позволяет экспортировать несколько объектов, функций или данных:
//1) const car = {
// 	brand: 'Ford',
// 	model: 'Fiesta'
// }
// exports.car = car
// или
//2) exports.car = {
// 	brand: 'Ford',
// 	model: 'Fiesta'
// }
//++ Введение в менеджер пакетов npm
//++Как использовать или выполнить пакет, установленный с помощью npm
// var cowsay = require("cowsay");
// console.log(cowsay.say({
// 	text : "Витя ты крутой чувак",
// 	e : "oO",
// 	T : "U "
// }));
//++Цикл событий Node.js
// const bar = () => console.log('bar')
// const baz = () => console.log('baz')
// const foo = () => {
// 	console.log('foo')
// 	setTimeout(bar, 3000)
// 	baz()
// }
// foo()
//--
// const bar = () => console.log('bar')

// const baz = () => console.log('baz')

// const foo = () => {
// 	console.log('foo')
// 	setTimeout(bar, 0)
// 	new Promise((resolve, reject) =>
// 		resolve('жооооооооооопппппаааа!!!!!')
// 	).then(resolve => console.log(resolve))
// 	baz()
// }
// foo()
//----------------
