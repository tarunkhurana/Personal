import $ from "jquery";

const displayButton = () => {
    const button = $("<button></button>", { text: "Don't Click me!" });
    button.appendTo($("body"));
    button.click(() => {
        System.import("./some-file").then(module => {
            module.loadFile();
        });
    })
}

export {
    displayButton
}