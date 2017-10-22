module.exports = {
	entry: ['./app/index2.js'],
	output: {
	  path: __dirname + '/build',
	  filename: 'bundle.js'
	},
	devServer: {
		port: 3000,
		contentBase: './build',
		inline: true
	}
}