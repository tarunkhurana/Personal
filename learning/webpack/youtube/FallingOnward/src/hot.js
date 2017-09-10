import $ from "jquery";
let adder = 33;

if (module.hot) {
    const data = module.hot.data || {};
    if (data.adder) {
        adder = adder + data.adder;
    }
    module.hot.accept();
    module.hot.dispose(data => {
        data.adder = adder;
    });
}

$("p").text(adder);