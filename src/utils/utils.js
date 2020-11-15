function formatDate(dateAsString) {
    const date = new Date(dateAsString);
    return `${date.toLocaleString('ru', { day: 'numeric' })} ${date.toLocaleString('ru', { month: 'long' })}, ${date.toLocaleString('ru', { year: 'numeric' })}`;
}

export { formatDate };