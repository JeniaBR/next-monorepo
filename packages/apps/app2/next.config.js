const { dependencies } = require("./package.json");

const withTranspileModules = require("next-transpile-modules")(
  Object.keys(dependencies || []).filter((dependency) =>
    dependency.startsWith("@shared/")
  )
);

module.exports = withTranspileModules({
  future: {
    webpack5: true,
  },
});
