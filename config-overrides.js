const { override, fixBabelImports, addLessLoader } = require("customize-cr");

module.exports = override(
    fixBabelImports("antd", {
        libraryDirectory: "es",
        style: true,
    }),
    addLessLoader({        
            javascripEnabled: true,
    })
);