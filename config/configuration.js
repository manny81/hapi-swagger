var config = {
	development: {
		host:'localhost',
		port: process.env.PORT || 3000
	},

}

exports.get = function get(env) {
  return config[env];
}