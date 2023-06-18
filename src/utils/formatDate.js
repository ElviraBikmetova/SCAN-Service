export const formatDate = (stringDate) => {
	const date = new Date(stringDate)
	return date.toLocaleDateString('ru-RU')
}

