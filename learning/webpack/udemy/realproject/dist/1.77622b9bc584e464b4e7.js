webpackJsonp([1],{1504:function(e,t,l){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),u=l(1),c=function(e){return e&&e.__esModule?e:{default:e}}(u),o=l(11),s=l(36),f=l(72),m=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}(f),d=function(e){function t(){return a(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),i(t,[{key:"componentWillMount",value:function(){this.props.findArtist(this.props.params.id)}},{key:"componentWillReceiveProps",value:function(e){e.params.id!==this.props.params.id&&this.props.findArtist(e.params.id)}},{key:"componentWillUnmount",value:function(){this.props.resetArtist()}},{key:"onDeleteClick",value:function(){this.props.deleteArtist(this.props.params.id)}},{key:"renderAlbums",value:function(){var e=this.props.artist.albums;if(e&&e.map)return e.map(function(e){return c.default.createElement("div",{className:"card album",key:e.title},c.default.createElement("div",{className:"card-image"},c.default.createElement("img",{src:e.image}),c.default.createElement("span",{className:"card-title"},c.default.createElement("h4",null,e.title))),c.default.createElement("div",{className:"card-content"},c.default.createElement("div",null,c.default.createElement("h5",null,e.copiesSold),c.default.createElement("i",null,"copies sold")),c.default.createElement("div",null,c.default.createElement("h5",null,e.numberTracks),c.default.createElement("i",null,"tracks"))))})}},{key:"render",value:function(){if(!this.props.artist)return c.default.createElement("div",null,'Todo: implement "FindArtist" query');var e=this.props.artist,t=e.name,l=e.age,a=e.genre,n=e.image,r=e.yearsActive,i=e.netWorth,u=e.labelName,o=e._id;return c.default.createElement("div",null,c.default.createElement("div",{className:"spacer"},c.default.createElement(s.Link,{to:"/"},"Back"),c.default.createElement(s.Link,{to:"/artists/"+o+"/edit"},"Edit"),c.default.createElement("a",{onClick:this.onDeleteClick.bind(this)},"Delete")),c.default.createElement("ul",{className:"collection artist-detail"},c.default.createElement("li",{className:"collection-item header"},c.default.createElement("div",null,c.default.createElement("h3",null,t),c.default.createElement("h5",null,"Master of ",a)),c.default.createElement("image",{src:n,className:"right"})),c.default.createElement("li",{className:"collection-item"},c.default.createElement("h5",null,r),c.default.createElement("p",null,c.default.createElement("i",null,"Years Active"))),c.default.createElement("li",{className:"collection-item"},c.default.createElement("h5",null,l),c.default.createElement("p",null,c.default.createElement("i",null,"Years Old"))),c.default.createElement("li",{className:"collection-item"},c.default.createElement("h5",null,"$",i),c.default.createElement("p",null,c.default.createElement("i",null,"Net Worth"))),c.default.createElement("li",{className:"collection-item"},c.default.createElement("h5",null,u),c.default.createElement("p",null,c.default.createElement("i",null,"Label"))),c.default.createElement("li",{className:"flex wrap"},this.renderAlbums())))}}]),t}(u.Component),p=function(e){return{artist:e.artists.artist}};t.default=(0,o.connect)(p,m)(d)}});