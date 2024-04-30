class Chronometer {
	constructor() {
		this.currentTime = 0
		this.intervalId = null
	}

	start(printTimeCallback) {
		this.stop()

		this.intervalId = setInterval(() => {
			this.currentTime++
			!printTimeCallback ? null : printTimeCallback(this.intervalId)
		}, 10)
	}

	getMinutes() {
		return Math.floor(this.currentTime / 6000)
	}

	getSeconds() {
		return Math.round((this.currentTime / 100) % 60)
	}

	getCentiseconds() {
		return Math.round((this.currentTime % 100) % 59)
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
		return this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds()).toString() + '.' + this.computeTwoDigitNumber(this.getCentiseconds()).toString()
	}
}

