define( [], function ( ) {
	'use strict';

	// ****************************************************************************************
	// Dimensions & Measures
	// ****************************************************************************************
	var dimensions = {
		uses: "dimensions",
		min: 1,
		max: 1
	};

	var measures = {
		uses: "measures",
		min: 0,
		max: 0
	};

	var sorting = {
		uses: "sorting"
	};

	// ****************************************************************************************
	// Other Settings
	// ****************************************************************************************

	var timeSetting = {
		ref: "props.time",
		label: "Animation Time (ms)",
		type: "integer",
		defaultValue: 3000,
		show: true
	};

	

	// ****************************************************************************************
	// Property Panel Definition
	// ****************************************************************************************

	// Appearance Panel
	var appearancePanel = {
		uses: "settings",
		items: {
			settings: {
				type: "items",
				label: "Settings",
				items: {
					timeSetting: timeSetting
				}
			}
		}
	};

	// Return values
	return {
		type: "items",
		component: "accordion",
		items: {
			dimensions: dimensions,
			sorting: sorting,
			//addons: addons,
			appearance: appearancePanel

		}
	};

} );
