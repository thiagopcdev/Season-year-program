import Months from './Months';
import { exit } from 'process';
import Seasons from './Seasons';
import readline from 'readline-sync';

const monthNames = Object.values(Months);

const choiceMonth = readline.keyInSelect(monthNames, 'Escolha um mês do ano', {cancel: 'SAIR'});

if (choiceMonth == -1) {
  console.log('Saindo...');
  exit();
}

const seasonsSouth = {
    [Seasons.FALL]: [Months.MARCH, Months.APRIL, Months.MAY, Months.JUNE],
    [Seasons.WINTER]: [Months.JUNE, Months.JULY, Months.AUGUST, Months.SEPTEMBER],
    [Seasons.SPRING]: [Months.SEPTEMBER, Months.OCTOBER, Months.NOVEMBER, Months.DECEMBER],
    [Seasons.SUMMER]: [Months.DECEMBER, Months.JANUARY, Months.FEBRUARY, Months.MARCH],
}

const seasonsNorth = {
  [Seasons.SPRING]: seasonsSouth[Seasons.FALL],
  [Seasons.SUMMER]: seasonsSouth[Seasons.WINTER],
  [Seasons.FALL]: seasonsSouth[Seasons.SPRING],
  [Seasons.WINTER]: seasonsSouth[Seasons.SUMMER]
}

const hemispheres = {
  "Norte": seasonsNorth,
  "SUl": seasonsSouth
}

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), 'Escolha um hemisfério', {cancel: 'SAIR'});

if (choiceHemisphere == -1) {
  console.log('Saindo...');
  exit();
}

const month = Object.values(Months)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

console.log(`Mês: ${month}`);
console.log(`Hemisfério: ${hemisphere}`);
console.log(`Estações`);

const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere]
Object.entries(chosenHemisphereSeasons).map((entry) => {
  
  const season = entry[0];
  const months = entry[1];

  if(months.includes(month)) console.log(season);
});
