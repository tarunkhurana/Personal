"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var Nav = _interopRequire(require("./Nav"));

var Sidebar = _interopRequire(require("./Sidebar"));

var Users = require("../containers").Users;


/* The Users component is a sample container with corresponding reducer
 * and action creators for demonstration. Feel free to remove for your own project */


module.exports = function (props) {
	var menu = [{ name: "intro", link: "#intro" }, { name: "creating projects", link: "#create" }, { name: "adding components", link: "#components" }, { name: "theme support", link: "#themes" }, { name: "turbo backend", link: "#turbo" }];

	return React.createElement(
		"div",
		{ className: "stretched side-header" },
		React.createElement(Nav, null),
		React.createElement(
			"div",
			null,
			React.createElement(Sidebar, { items: menu }),
			React.createElement(
				"section",
				{ id: "intro", style: { marginTop: 64 } },
				React.createElement(
					"div",
					{ className: "container", style: style.container },
					React.createElement(
						"h1",
						null,
						"Welcome to Turbo"
					),
					React.createElement("hr", null),
					React.createElement(
						"p",
						{ style: { fontSize: 16 } },
						"Turbo is a command-line utility for quickly scaffolding React/Redux projects with or without Node/Express server included."
					)
				)
			),
			React.createElement(
				"section",
				{ id: "create" },
				React.createElement(
					"div",
					{ className: "container", style: style.container },
					React.createElement(
						"h3",
						{ style: style.subheader },
						"Creating Projects"
					),
					React.createElement(
						"p",
						{ style: style.paragraph },
						"Projects can be created with or without a Node/Express server. To create a project only with React and Redux:"
					),
					React.createElement(
						"pre",
						null,
						React.createElement(
							"code",
							null,
							"$ turbo new MY_FIRST_PROJECT",
							React.createElement("br", null),
							"$ cd MY_FIRST_PROJECT",
							React.createElement("br", null),
							"$ npm install"
						)
					),
					React.createElement(
						"p",
						{ style: style.paragraph },
						"To create a project with React and Redux AND Node/Express server:"
					),
					React.createElement(
						"pre",
						null,
						React.createElement(
							"code",
							null,
							"$ turbo new MY_FIRST_PROJECT --express",
							React.createElement("br", null),
							"$ cd MY_FIRST_PROJECT",
							React.createElement("br", null),
							"$ npm install"
						)
					),
					React.createElement(
						"p",
						{ style: style.paragraph },
						"To add Node/Express to an existing project (from root directory):"
					),
					React.createElement(
						"pre",
						null,
						React.createElement(
							"code",
							null,
							"$ turbo server express"
						)
					)
				)
			),
			React.createElement(
				"section",
				{ id: "components" },
				React.createElement(
					"div",
					{ className: "container", style: style.container },
					React.createElement(
						"h3",
						{ style: style.subheader },
						"Adding Components"
					),
					React.createElement(
						"p",
						{ style: style.paragraph },
						"To create a standard React component:"
					),
					React.createElement(
						"pre",
						null,
						React.createElement(
							"code",
							null,
							"$ turbo component COMPONENT_NAME"
						)
					),
					React.createElement(
						"p",
						{ style: style.paragraph },
						"To create a standard Redux Reducer:"
					),
					React.createElement(
						"pre",
						null,
						React.createElement(
							"code",
							null,
							"$ turbo reducer REDUCER_NAME"
						)
					)
				)
			),
			React.createElement(
				"section",
				{ id: "themes" },
				React.createElement(
					"div",
					{ className: "container", style: style.container },
					React.createElement(
						"h3",
						{ style: style.subheader },
						"Theme Support"
					),
					React.createElement(
						"p",
						{ style: style.paragraph },
						"Turbo supports a few html themes out of the box. To switch themes, from the root directory of a project:"
					),
					React.createElement(
						"pre",
						{ style: { marginBottom: 4 } },
						React.createElement(
							"code",
							null,
							"$ turbo theme editorial"
						)
					),
					React.createElement(
						"p",
						{ style: style.paragraph },
						"where 'editorial' is the theme name. Currently, Turbo supports the following themes: ",
						React.createElement(
							"a",
							{ target: "_blank", href: "https://html5up.net/editorial" },
							"editorial"
						),
						", ",
						React.createElement(
							"a",
							{ target: "_blank", href: "https://html5up.net/prologue" },
							"prologue"
						),
						", ",
						React.createElement(
							"a",
							{ target: "_blank", href: "https://html5up.net/hyperspace" },
							"hyperspace"
						),
						", stack. These themes are free and can be found on ",
						React.createElement(
							"a",
							{ target: "_blank", href: "https://html5up.net/" },
							"HTML5UP"
						),
						"."
					)
				)
			),
			React.createElement(
				"section",
				{ id: "turbo", style: { marginTop: 64 }, className: "bottommargin-lg" },
				React.createElement(
					"div",
					{ className: "container", style: style.container },
					React.createElement(
						"h1",
						null,
						"Turbo Backend"
					),
					React.createElement("hr", null),
					React.createElement(
						"p",
						{ style: style.paragraph },
						"Turbo supports data persistence out of the box. If you do not want to write a full-scale backend with database but want to store data, ",
						React.createElement(
							"a",
							{ target: "_blank", style: { color: "red" }, href: "https://www.turbo360.co/" },
							"Turbo"
						),
						" is a good solution. To add a backend, register a project on ",
						React.createElement(
							"a",
							{ target: "_blank", style: { color: "red" }, href: "https://www.turbo360.co/" },
							"Turbo"
						),
						" then from the root directory:"
					),
					React.createElement(
						"pre",
						{ style: { marginBottom: 24 } },
						React.createElement(
							"code",
							null,
							"$ turbo app MY_TURBO_APP_ID"
						)
					),
					React.createElement(
						"p",
						{ style: style.paragraph },
						"The section below is an illustration of data persistence using the Turbo backend. After connecting your project, enter a username with password then press submit. Turbo also support User authentication out of the box. After creating a user, enter the username and password in the login area to authenticate. This login state will persist across sessions."
					),
					React.createElement(Users, null),
					React.createElement("br", null),
					React.createElement("br", null),
					React.createElement(
						"p",
						{ style: style.paragraph },
						"The code for the demonstration above can be found in the User.js component:"
					),
					React.createElement(
						"pre",
						null,
						"src /",
						React.createElement("br", null),
						"-- components /",
						React.createElement("br", null),
						"-- containers /",
						React.createElement("br", null),
						React.createElement(
							"span",
							{ style: { marginLeft: 24 } },
							"Users.js"
						)
					)
				)
			),
			React.createElement(
				"section",
				{ id: "dashboard", style: { marginTop: 64 }, className: "bottommargin-lg" },
				React.createElement(
					"div",
					{ className: "container", style: style.container },
					React.createElement(
						"h1",
						null,
						"Turbo Dashboard"
					),
					React.createElement("hr", null),
					React.createElement(
						"p",
						{ style: style.paragraph },
						"All entities for your project can be managed on the ",
						React.createElement(
							"a",
							{ target: "_blank", style: { color: "" }, href: "https://www.turbo360.co/" },
							"Turbo Dashboard"
						),
						". To see your current entities, select your project from the dashboard then select the 'ENTITIES' option from the sidebar."
					)
				)
			)
		)
	);
};

var style = {
	container: {
		padding: "0px 64px 32px 260px"
	},
	subheader: {
		marginBottom: 12
	},
	paragraph: {
		fontSize: 16,
		marginBottom: 6
	}
};