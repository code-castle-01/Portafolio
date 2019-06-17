const path = require('path'); // nodemo vien
const HtmlWebPackPlugin = require('html-webpack-plugin'); // el plugin que instalamoss con camelCase
const FaviconsWebPackPlugin = require('favicons-webpack-plugin'); // para generar el favicon

// se crea el mudolo para exportarlo
module.exports = {
  entry: './src/index.js',                  // para saber cual es el elemento principal a tener en cuenta
  output: {                                 // donde lo vamos a empujar
    path: path.resolve(__dirname, 'dist'),  // aqui se guarda elemento "resolve" para saber donde me encuentro
    filename: 'bundle.js'                   // una asignacion de nombre como se va a contruir
  },
  resolve: {                                // saber con que archivos voy a trabajar
    extensions: ['.js', '.jsx']              // arreglo de las extensiones
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader"
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      file: "./index.html"
    }),
    new FaviconsWebPackPlugin("./public/icon.png")
  ]
}

