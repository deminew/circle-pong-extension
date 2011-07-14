// Inspired by Seth Ladd's demo code
Engine = function () {
	
};


Engine.prototype.initialize = function() {
		this.players = [];
		this.collisionManager = null;
		this.context = null;
		this.lastUpdateTimestamp = null
		this.deltaTime = null
		this.ball = null
	}
	
Engine.prototype.addPlayer = function(player) {
	
}

Engine.prototype.removePlayer = function(player) {
	
}

Engine.prototype.checkCollisions = function(deltaTime) {
	
}

Engine.prototype.loop = function() {
	var now = Date.now()
	this.deltaTime = now - this.lastUpdateTimestamp;
	this.checkCollisions(deltaTime);
	this.updateObjects(deltaTime);
	this.drawObjects()
	this.saveGameState();
	this.transmitGameState();
	this.lastUpdateTimestamp = now
};

Engine.prototype.updateObjects = function(dt) {
	// Server function
	this.ball.update(dt)
	for (var i=0;i<this.players.length; i++) {
		this.players[i].update();
	}
};

Engine.prototype.draw = function () {
	// Local function that draws on the client
};

Engine.prototype.start = function () {
	console.log("starting game with ____ as host")
	this.lastUpdateTimestamp = Date.now()
	var self = this
	(function gameLoop() {
			self.loop();
			window.requestAnimationFrame(gameLoop, self.ctx.canvas)
	})();
};

Engine.prototype.saveGameState = function() {
	// only host should run this function
};
