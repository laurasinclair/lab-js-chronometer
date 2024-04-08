class Chronometer {
	constructor() {
		this.currentTime = 0
		this.intervalId = null
	}

	start(printTimeCallback) {
		this.intervalId = setInterval(() => {
			this.currentTime++
			!printTimeCallback ? null : printTimeCallback(this.intervalId)
		}, 1000)
	}

	getMinutes() {
		return (Math.floor(this.currentTime / 60) * 100) / 100
	}

	getSeconds() {
		return this.currentTime % 60
	}

	computeTwoDigitNumber(value) {
		return value < 10 && value >= 0 ? ('' + value).padStart(2, 0) : value.toString()
	}

	stop() {
		clearInterval(this.intervalId)
	}

	reset() {
		this.currentTime = 0
	}

	split() {
		return this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds()).toString()
	}
}
