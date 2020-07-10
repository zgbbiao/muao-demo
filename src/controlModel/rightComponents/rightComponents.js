// 将props数组合并到tagProps内
export const mergeProps = (props, prop) => {
	let obj = {}
	props.forEach(item => {
		obj[item.propsName] = item.default
	})
	return obj
}

// 将style数组合并到tagStyle内
export const mergeStyles = (styles, prop) => {
	let obj = {}
	styles.forEach(item => {
		if (item.default) {
			obj[item.name] = item.default
		} else {
			obj[item.name] = null
		}
	})
	return obj
}