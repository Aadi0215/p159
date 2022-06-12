AFRAME.registerComponent("info-banner", {
	schema: {
		selectedItemId: { default: "", type: "string" },
	},
	update: function () {
		const fadeBackgroundEl = document.querySelector("#fadeBackground");

		c = fadeBackgroundEl.children;
		if (c.length > 0) {
			var i;
			for (i = 0; i <= c.length; i++) {
				fadeBackgroundEl.removeChild(c[i]);
			}
		} else {
			this.handleMouseClickEvents();
		}
	},

	handleMouseClickEvents: function () {
		this.el.addEventListener("click", (evt) => {
			const placesContainer = document.querySelector("#places-container");
			const { state } = placesContainer.getAttribute("tour");
			if (selectedItemId) {
				fadeBackgroundEl.setAttribute("visible", true);
				fadeBackgroundEl.setAttribute("info-banner", {
					itemId: selectedItemId,
				});
				titleEl.setAttribute("visible", false);
				cursorEl.setAttribute("position", { x: 0, y: 0, z: -1 });
				cursorEl.setAttribute("geometry", {
					radiusInner: 0.03,
					radiusOuter: 0.04,
				});
			} else {
				fadeBackgroundEl.setAttribute("visible", false);
				titleEl.setAttribute("visible", true);
				cursorEl.setAttribute("position", { x: 0, y: 0, z: -3 });
				cursorEl.setAttribute("geometry", {
					radiusInner: 0.08,
					radiusOuter: 0.12,
				});
			}
		});
	},
});
