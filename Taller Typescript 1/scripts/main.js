import { dataSeries} from './dataSeries.js';
var seriesTbody = document.getElementById('Series');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
renderSeriesInTable(dataSeries);
averageSeasons(dataSeries);

function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (Serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(Serie.id, "</td>\n<td>").concat(Serie.name, "</td>\n<td>").concat(Serie.channel, "</td>\n<td>").concat(Serie.seasons, "</td>\n                           <td>");
        seriesTbody.appendChild(trElement);
    });
}

function averageSeasons(series){
    console.log('Calculando Promedio')
    let totalTemporadas = 0;
    for (let i = 0; i < series.length; i++) {
        totalTemporadas += series[i].seasons;
      };
    const promedioTemporadas = totalTemporadas / series.length;

    const resultado = document.getElementById('promedio-temporadas');
    resultado.textContent = `El promedio de temporadas es ${promedioTemporadas.toFixed(2)}.`;

}

function searchSerieByName(nameKey, series) {
    return nameKey === '' ? dataSeries : series.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function clearSeriesInTable() {
    while (seriesTbody.hasChildNodes()) {
        if (seriesTbody.firstChild != null) {
            seriesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
