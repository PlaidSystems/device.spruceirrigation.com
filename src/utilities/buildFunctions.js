//create array of tailwind colors for whitelist

const colors = [
	'gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink', 'teal', 'orange', 'tan'
  ]
  
const shades = ['100', '200', '300', '400', '500', '600', '700', '800', '900']
  
const whitelistColorArray = () => {
	var whitelist = []
	colors.forEach(color => {
		shades.forEach(shade => {
			whitelist.push('text-' + color + '-' + shade)
			whitelist.push('hover:text-' + color + '-' + shade)
			whitelist.push('bg-' + color + '-' + shade)
			whitelist.push('from-' + color + '-' + shade)
			whitelist.push('via-' + color + '-' + shade)
			whitelist.push('to-' + color + '-' + shade)
			whitelist.push('border-' + color + '-' + shade)
			whitelist.push('hover:bg-' + color + '-' + shade)
			whitelist.push('from-transparent')
			whitelist.push('to-transparent')		
          })
	})
	return whitelist
}

module.exports.whitelistColors = whitelistColorArray()