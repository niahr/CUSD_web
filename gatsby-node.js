
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
          // {
          //   test: /bootstrap/,
          //   use: loaders.null(),
          // },
          // {
          //   test: /react-bootstrap/,
          //   use: loaders.null(),
          // }, 
          // {
          //   test: /react-bootstrap/,
          //   use: loaders.null(),
          // }
        ],
      },
    })
  }
}