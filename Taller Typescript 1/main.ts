import { Serie } from './Serie.js';

import { dataSeries } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById('Series')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;


btnfilterByName.onclick = () => applyFilterByName();

renderSeriesInTable(dataSeries);


function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((Serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${Serie.id}</td>
                           <td>${Serie.name}</td>
                           <td>${Serie.channel}</td>
                           <td>${Serie.seasons}</td>
                           <td>${Serie.abstract}</td>
                           <td>${Serie.watch}</td>
                           <td>${Serie.image}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearSeriesInTable();
  let seriesFiltered: Serie[] = searchSerieByName(text, dataSeries);
  renderSeriesInTable(seriesFiltered);
}

function searchSerieByName(nameKey: string, series: Serie[]) {
  return nameKey === '' ? dataSeries : series.filter( c => 
    c.name.match(nameKey));
}

function clearSeriesInTable() {
  while (seriesTbody.hasChildNodes()) {
    if (seriesTbody.firstChild != null) {
      seriesTbody.removeChild(seriesTbody.firstChild);
     
    }
  }
}