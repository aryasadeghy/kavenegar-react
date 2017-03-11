module.exports = {
  entry: 'app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main : 'app/components/Main.jsx',
      NavBar : 'app/components/NavBar.jsx',
      LookUp : 'app/components/LookUp.jsx',
      About : 'app/components/About.jsx',
      Simple : 'app/components/Simple.jsx',
      Footer : 'app/components/Footer.jsx',
      maincss : 'public/styles/main.css',
      bootstrap : 'public/styles/bootstrap.css',
      navbarcss : 'public/styles/Navbar.css',
      receiveSMS : 'app/components/receiveSMS.jsx'




    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
