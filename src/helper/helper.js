const convertToRomanNumeral = (integer) => {
	let numeral;

	if(integer === 1) {numeral = 'I'}
	if(integer === 2) {numeral = 'II'}
	if(integer === 3) {numeral = 'III'}
	if(integer === 4) {numeral = 'IV'}
	if(integer === 5) {numeral = 'V'}
	if(integer === 6) {numeral = 'VI'}
	if(integer === 7) {numeral = 'VII'}

  return numeral
}

const pullOpeningCrawl = (rawData) => {
	let releaseDate = rawData.release_date.split('-')
	const year = releaseDate.shift()
	releaseDate.push(year)

	if (releaseDate[0] === '01') {releaseDate[0] = 'January'}
	if (releaseDate[0] === '02') {releaseDate[0] = 'February'}
	if (releaseDate[0] === '03') {releaseDate[0] = 'March'}
	if (releaseDate[0] === '04') {releaseDate[0] = 'April'}
	if (releaseDate[0] === '05') {releaseDate[0] = 'May'}
	if (releaseDate[0] === '06') {releaseDate[0] = 'June'}
	if (releaseDate[0] === '07') {releaseDate[0] = 'July'}
	if (releaseDate[0] === '08') {releaseDate[0] = 'August'}
	if (releaseDate[0] === '09') {releaseDate[0] = 'September'}
	if (releaseDate[0] === '10') {releaseDate[0] = 'October'}
	if (releaseDate[0] === '11') {releaseDate[0] = 'November'}
	if (releaseDate[0] === '12') {releaseDate[0] = 'December'}

	const lineBreakRegEx = new RegExp(/\s{3,}/, 'g')

	const formattedDate = `${releaseDate[0]} ${releaseDate[1]}, ${releaseDate[2]}`
	const filmTitle = rawData.title.toUpperCase();
	const episodeNo = convertToRomanNumeral(rawData.episode_id);

	const convertLinebreaks = rawData.opening_crawl.replace(lineBreakRegEx, '###');
	const openingCrawl = convertLinebreaks.split('###')

	// return { title: "THE FORCE AWAKENS", date: "December 11, 2015", episode: "VII", crawl: ['Luke Skywalker has vanished. In his absence, the sinister FIRST ORDER has risen from the ashes of the Empire and will not rest until Skywalker, the last Jedi, has been destroyed.', 'With the support of the REPUBLIC, General Leia Organa leads a brave RESISTANCE. She is desperate to find her brother Luke and gain his help in restoring peace and justice to the galaxy.', 'Leia has sent her most daring pilot on a secret mission to Jakku, where an old ally has discovered a clue to Lukes whereabouts....'] }

	return { title: filmTitle, date: formattedDate, episode: episodeNo, crawl: openingCrawl };
}

export default pullOpeningCrawl;