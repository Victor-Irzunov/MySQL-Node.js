// ++ WebDev с нуля. Канал Алекса Лущенко      Подключение к базе данных MySQL в Node.js #9  (я создал подкл к БД 29.10.2020   )

//npm i mysql

// --Теперь подключим модуль mysql в файл node.js:
const mysql = require('mysql')
// -- Следующий этап — конфигурация подключения.
const conn = mysql.createConnection({
	host: "localhost",                           //либо 127.0.0.1
	user: "root",
	database: "kurs",
	password: "root"
});

// HOST: "localhost",
//     USER: "root",
//     PASSWORD: "root",
//     DB: "kurs",
//     dialect: "mysql",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }

//-- Следующий этап — создание подключения
conn.connect(err => {
	if (err) {
		console.log(err)
		return err
	}
	else {
		console.log('Database-----ok')
	}
})
//---------------------------------------------------------------------------------
let query = 'SELECT * FROM products';
conn.query(query, (err, result, fiend) => {
	// console.log(err)
	// console.log(result)
	// console.log(result[1]['price'])
	// console.log(fiend)
	for (let i = 0; i < result.length; i++) {
		for (let k = 0; k < result.length; k++) {
			if (+result[i]['price'] < +result[k]['price']) {
				let a = result
				let b = result[i]
				result[i] = result[k]
				result[k] = b
				console.log('---------------________________________')
				console.log(a)
			}
		}
	}
})
//*RowDataPacket можно работать как с обычным массивом
// ! только SELECT из БД(вроде??)
//---------------------------------------------------------------------------------









//-------------------
//-- отключаемся
conn.end(err => {
	if (err) {
		console.log(err)
		return err
	}
	else {
		console.log('Database-----close')
	}
})