"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
	var menu = props.items.map(function (item, i) {
		return React.createElement(
			"li",
			{ key: i },
			React.createElement(
				"a",
				{ href: item.link },
				React.createElement(
					"div",
					{ style: { color: "#fff" } },
					item.name
				)
			)
		);
	});

	return React.createElement(
		"header",
		{ id: "header", className: "no-sticky hidden-xs sidebar", style: { paddingTop: 96, background: "#333" } },
		React.createElement(
			"div",
			{ id: "header-wrap" },
			React.createElement(
				"div",
				{ className: "container clearfix" },
				React.createElement(
					"div",
					{ id: "primary-menu-trigger" },
					React.createElement("i", { className: "icon-reorder" })
				),
				React.createElement(
					"nav",
					{ id: "primary-menu" },
					React.createElement(
						"ul",
						null,
						menu
					)
				)
			)
		)
	);
};