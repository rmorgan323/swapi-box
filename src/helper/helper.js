const convertToRomanNumeral = (integer) => {
  let numeral;

  integer === 1 && (numeral = 'I'); 
  integer === 2 && (numeral = 'II');
  integer === 3 && (numeral = 'III');
  integer === 4 && (numeral = 'IV');
  integer === 5 && (numeral = 'V');
  integer === 6 && (numeral = 'VI');
  integer === 7 && (numeral = 'VII');

  return numeral;
};

const pullOpeningCrawl = (rawData) => {
  let releaseDate = rawData.release_date.split('-');
  const year = releaseDate.shift();
  releaseDate.push(year);

  releaseDate[0] === '01' && (releaseDate[0] = 'January');
  releaseDate[0] === '02' && (releaseDate[0] = 'February');
  releaseDate[0] === '03' && (releaseDate[0] = 'March');
  releaseDate[0] === '04' && (releaseDate[0] = 'April');
  releaseDate[0] === '05' && (releaseDate[0] = 'May');
  releaseDate[0] === '06' && (releaseDate[0] = 'June');
  releaseDate[0] === '07' && (releaseDate[0] = 'July');
  releaseDate[0] === '08' && (releaseDate[0] = 'August');
  releaseDate[0] === '09' && (releaseDate[0] = 'September');
  releaseDate[0] === '10' && (releaseDate[0] = 'October');
  releaseDate[0] === '11' && (releaseDate[0] = 'November');
  releaseDate[0] === '12' && (releaseDate[0] = 'December');

  const lineBreakRegEx = new RegExp(/\s{4,}/, 'g');

  const formattedDate = `${releaseDate[0]} ${releaseDate[1]}, ${releaseDate[2]}`;
  const filmTitle = rawData.title.toUpperCase();
  const episodeNo = convertToRomanNumeral(rawData.episode_id);

  const convertLinebreaks = rawData.opening_crawl.replace(lineBreakRegEx, '###');
  const openingCrawl = convertLinebreaks.split('###');

  return { title: filmTitle, date: formattedDate, episode: episodeNo, crawl: openingCrawl };
};

export default pullOpeningCrawl;