exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /cytoscape/,
            use: loaders.null(),
          },
          {
            test: /react-cytoscapejs/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}