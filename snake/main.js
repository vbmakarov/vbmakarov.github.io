const canvas = document.querySelector("canvas")
const ctx = canvas.getContext('2d')
const score = document.querySelector('.score span')


// размер квадратика на поле
let cellSize = 50

// таймаут
let delay = 300

// направление движения змеи
let direction = null

// проглотила ли змея еду или нет
let takeFood = true

// тип еды (номера - это названия картинок в папке img)
let typeFood = 1

// координаты поля куда нужно поставить еду
let foodCoords = {
	x:200,
	y:300
}

// где еда была последний раз (координаты)
let lastCoordsFood = {
	x: 0,
	y: 0
}

// сама змея
let snake = [
	{
		x: 300,
		y: 300
	}
]



// главная функция - сама игра
function start() {
		if(direction == null) {
			snake.forEach((elem, index)=>{
				ctx.beginPath()
				ctx.globalAlpha = 50/100;
				ctx.fillRect(elem.x, elem.y, cellSize, cellSize)
				ctx.closePath();
			})
		} else {	
					if(snake[0]) {
						ctx.beginPath()
						ctx.fillStyle = 'black';
						ctx.fillRect(snake[0].x, snake[0].y, cellSize, cellSize)
						ctx.closePath();
					}
					
					
					let {x:firstRectX, y:firstRectY} = snake[0]
					let lastRect = snake.pop()
					if(lastRect.x == foodCoords.x && lastRect.y == foodCoords.y){
						takeFood = true	
					}
					ctx.clearRect(lastRect.x, lastRect.y, cellSize, cellSize)
					let nextRect = {x:0, y:0}
					if(direction === 'left'){
						nextRect.x = firstRectX - cellSize
						nextRect.y = firstRectY
					}
					if(direction === 'right'){
						nextRect.x = firstRectX + cellSize
						nextRect.y = firstRectY
					}
					if(direction === 'up'){
						nextRect.x = firstRectX
						nextRect.y = firstRectY - cellSize
					}
					if(direction === 'down'){
						nextRect.x = firstRectX
						nextRect.y = firstRectY + cellSize
					}
					if(nextRect.x == foodCoords.x && nextRect.y == foodCoords.y){
						takeFood = true
						snake.push({})
						+score.textContent++

					}
					if (isEnd(nextRect.x, nextRect.y)){
						score.textContent = "Игра окончена"
						clearInterval(interval)
						return
					}
					snake.unshift({...nextRect})
					ctx.beginPath()
					ctx.fillStyle = 'brown';
					ctx.globalAlpha = 50/100;
					ctx.fillRect(nextRect.x, nextRect.y, cellSize, cellSize)
					ctx.closePath();

		}
		drawFood()
}

let interval = setInterval(start, delay)




document.addEventListener('keydown', setDirection)

function setDirection(event) {

		if(event.key === 'ArrowDown' && direction !== 'up') {
			direction = 'down'
		}

		if(event.key === 'ArrowRight' && direction !== 'left') {
			direction = 'right'
		}

		if(event.key === 'ArrowUp' && direction !== 'down') {
			direction = 'up'
		}

		if(event.key === 'ArrowLeft' && direction !== 'right') {
			direction = 'left'
		}

} 



// координаты куда поставить еду
function getCoordsFood () {

	const x = Math.floor(Math.random() * (550 - 100) + 100.5)
	const y = Math.floor(Math.random() * (550 - 100) + 100.5)

	const coincidense = snake.filter((elem, index)=>{
		return elem.x == x && elem.y == y
	})

	if(coincidense.length === 0) {
		return {
			x:Math.round(x / cellSize) * cellSize,
			y:Math.round(y / cellSize) * cellSize,
		}
	}

	return getCoordsFood ()
	
}


// тип еды - число в диапазоне от 1 до 3
function getFoodNumber (){
	return Math.floor(Math.random() * (3 - 1) + 1.5)
} 



// отрисовать еду
function drawFood(){
	if(takeFood) {
		ctx.clearRect(cellSize, 0, cellSize, cellSize)
		lastCoordsFood = {...foodCoords}
		foodCoords = {...getCoordsFood()} 
		typeFood = getFoodNumber() 
		const foodImg = new Image()
		foodImg.src = `img/${typeFood}.png`
		foodImg.style.position = 'absolute'
		foodImg.style.zIndex = '1'
		foodImg.onload = function() {
			ctx.beginPath()
			ctx.globalAlpha = 100/100;
			ctx.drawImage(foodImg, cellSize, 0);
			ctx.drawImage(foodImg, foodCoords.x, foodCoords.y)
			ctx.closePath();
		}
		takeFood = false
	}

}



// проверка на ошибки которые могут быть допущены игроком
function isEnd(x, y) {
	
	if(x === 0 || x === 650 || y === 50 || y === 600 ){
		return true
	}
	
	for(let i = 0; i < snake.length; i++) {
		if(snake[i].x === x && snake[i].y === y) {
			return true
		}
	}
	
	return false
}







