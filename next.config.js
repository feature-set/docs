// const withMDX = require('@next/mdx')({
//   extension: /.mdx?$/,
// });

module.exports = {
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.md$/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]',
        },
      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
      }
    );

    return config;
  },
};
