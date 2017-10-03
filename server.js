import express from "express"
//отдает html функцию которая принимает app
import serverTemplate from "./serverTemplate"
//делает компоненты строкой
import { renderToString } from "react-dom/server"
import React from "react"
//основной компонент приложения
import App from "./src/app"
import ReactDOM from "react-dom"

let app = express();

//отдаем статические файлы
app.use('/assets', express.static('src'))
app.use('/dist', express.static('dist'))

app.get("/", (req, res) => {
	//делаем код приложения строкой
	const appString = renderToString(<App />)
	//в базовый html помещаем код приложения
	res.send(serverTemplate(appString))
})

let port = 8081

app.listen(port)
console.log("start ssr in ", port)