// setinterval para exibir o relógio atualizando automaticamente

setInterval(() => {
  const today = new Date();
  const time = today.toLocaleTimeString();
  const year = today.getFullYear();

  document.querySelector('.show-time').textContent = `🕗 ${time}`;
  document.querySelector('.show-year').textContent = `📅 ${year} ©️`;
}, 1000);

// pegando a data atual

const now = new Date();

// functions para formatar a data das estações, mas deixando os anos automaticamente

function formateSeason(month, day) {
  const d = day;
  const m = month;
  const y = now.getFullYear();
  return `${m} ${d} ${y}`;
}

function nextYear(month, day) {
  const d = day;
  const m = month;
  const y = now.getFullYear() + 1;
  return `${m} ${d} ${y}`;
}

function lastYear(month, day) {
  const d = day;
  const m = month;
  const y = now.getFullYear() - 1;
  return `${m} ${d} ${y}`;
}

// formatando as datas que começam as estações do ano

const formateStartSummer = formateSeason('Dec', '22');
const formateStartSummerForNewYear = lastYear('Dec', '22');
const formateEndSummer = nextYear('Mar', '21');
const formateEndSummerForNewYear = formateSeason('Mar', '21');
const formateStartAutumn = formateSeason('Mar', '22');
const formateEndAutumn = formateSeason('Jun', '21');
const formateStartWinter = formateSeason('Jun', '22');
const formateEndWinter = formateSeason('Sep', '21');
const formateStartSpring = formateSeason('Sep', '22');
const formateEndSpring = formateSeason('Dec', '21');

// usando o getTime() pra transformar as datas em milessegundos

const startSummer = new Date(formateStartSummer).getTime();
const startSummerForNewYear = new Date(formateStartSummerForNewYear).getTime();
const endSummer = new Date(formateEndSummer).getTime();
const endSummerForNewYear = new Date(formateEndSummerForNewYear).getTime();
const startAutumn = new Date(formateStartAutumn).getTime();
const endAutumn = new Date(formateEndAutumn).getTime();
const startSpring = new Date(formateStartSpring).getTime();
const endSpring = new Date(formateEndSpring).getTime();
const startWinter = new Date(formateStartWinter).getTime();
const endWinter = new Date(formateEndWinter).getTime();

// definindo o mês atual para comparar as datas
const monthForCompare = now.getTime();

// function para renderizar as informações das estações

function renderShowSeasons(url, season) {
  const img = url;
  const seasons = season;
  const showSeasons = document.querySelector('.show-seasons');
  const title = document.querySelector('.titulo');
  showSeasons.innerHTML = `
  <div>
  <img src="${img}">
  </div>
  `;

  title.textContent = seasons;
}

const urlSummer = 'https://source.unsplash.com/random/900x500?/s/photos/summer';
const urlSpring = 'https://source.unsplash.com/random/900x500?/s/photos/spring';
const urlAutumn = 'https://source.unsplash.com/random/900x500?/s/photos/autumn';
const urlWinter = 'https://source.unsplash.com/random/900x500?/s/photos/winter';

// if para definir em qual estações estamos e exibir as imagens de acordo com cada estação

if (
  monthForCompare >= startSummer ||
  (monthForCompare >= startSummerForNewYear &&
    monthForCompare <= endSummerForNewYear &&
    monthForCompare <= endSummer)
) {
  renderShowSeasons(urlSummer, 'Verão');
} else if (monthForCompare >= startAutumn && monthForCompare <= endAutumn) {
  renderShowSeasons(urlAutumn, 'Outono');
} else if (monthForCompare >= startWinter && monthForCompare <= endWinter) {
  renderShowSeasons(urlWinter, 'Inverno');
} else if (monthForCompare >= startSpring && monthForCompare <= endSpring) {
  renderShowSeasons(urlSpring, 'Primavera');
} else {
  console.log('error');
}

/* 
22/12 a 21/03 - Verão; 
22/03 a 21/06 - Outono; 
22/06 a 21/09 - Inverno; 
22/09 a 21/12 - Primavera. 

pra ser inverno: 
month > autumn && month < spring

pra ser verão: 

month > spring && month < autumn

pra ser outono: 

month > summer && month < winter

pra ser primavera:

month > winter && month < summer

*/
