gemini.suite("button", function(suite) {
	suite
	.setUrl("/")
	.setCaptureElements(".elem")
	.before(function(actions, find) {
		actions.waitForElementToShow(".elem", 3000)
		this.button = find(".elem");
	})
	.capture("plain")
	.capture("hovered", function(actions) {
		actions.mouseMove(this.button);
	})
	.capture("pressed", function(actions) {
		actions.mouseDown(this.button);
	})
	.capture("clicked", function(actions) {
		actions.mouseUp(this.button);
	});
});