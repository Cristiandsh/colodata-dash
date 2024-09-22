// const API_ENDPOINT = 'http://localhost:7071/api/bi_data';
const API_ENDPOINT = 'https://fn-colodata-biapp.azurewebsites.net/api/bi_data';

function fetchData() {
    return fetch(API_ENDPOINT, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });
}

// SAMPLET DATA

// colodataRes = {
//     "visits": {
//         "dates": [
//             "Aug-26",
//             "Sep-2",
//             "Sep-9",
//             "Sep-16"
//         ],
//         "data": [231593, 241529, 241844, 227701]
//     },
//     "trendMostViewed": {
//         "dates": [
//             "Aug-26",
//             "Sep-2",
//             "Sep-9",
//             "Sep-16"
//         ],
//         "data": [
//             {
//                 "name": "OTHERS",
//                 "data": [75359, 79053, 75189, 76967]
//             },
//             {
//                 "name": "Salud y Protección Social",
//                 "data": [31787, 31296, 34711, 32080]
//             },
//             {
//                 "name": "UNNAMED",
//                 "data": [40604, 43482, 36543, 28380]
//             },
//             {
//                 "name": "Gastos Gubernamentales",
//                 "data": [17287, 20148, 25500, 19266]
//             },
//             {
//                 "name": "Función pública",
//                 "data": [15107, 13542, 13942, 15198]
//             },
//             {
//                 "name": "Ordenamiento Territorial",
//                 "data": [14944, 13131, 14073, 14003]
//             },
//             {
//                 "name": "Hacienda y Crédito Público",
//                 "data": [11927, 12425, 11289, 11241]
//             },
//             {
//                 "name": "Educación",
//                 "data": [9937, 9817, 10149, 10588]
//             },
//             {
//                 "name": "Ambiente y Desarrollo Sostenible",
//                 "data": [7713, 9068, 9368, 10053]
//             },
//             {
//                 "name": "Inclusión Social y Reconciliación",
//                 "data": [6928, 9567, 11080, 9925]
//             }
//         ]
//     },
//     "topViewedLastWeek": {
//         "assetIds": [
//             "n2jp-53s2",
//             "9z4i-tgzy",
//             "jbjy-vk9h",
//             "xfif-myr2",
//             "gt2j-8ykr",
//             "mxk5-ce6w",
//             "xdk5-pm3f",
//             "p6dx-8zbt",
//             "rhwq-7mhs",
//             "mcec-87by"
//         ],
//         "data": [18805, 6990, 6916, 6645, 6526, 6499, 6006, 4830, 4171, 3519],
//         "assetIdNameMap": {
//             "n2jp-53s2": "DECLARACION DE RENTA PERSONAS NATURALES",
//             "9z4i-tgzy": "Mapa de Códigos Postales - Municipio de Medellín",
//             "jbjy-vk9h": "SECOP II - Contratos Electrónicos",
//             "xfif-myr2": "Beneficiarios Más Familias en Acción",
//             "gt2j-8ykr": "Casos positivos de COVID-19 en Colombia.",
//             "mxk5-ce6w": "Información financiera con fines de supervisión – CUIF por moneda Entidades vigiladas",
//             "xdk5-pm3f": "Departamentos y municipios de Colombia",
//             "p6dx-8zbt": "SECOP II - Procesos de Contratación",
//             "rhwq-7mhs": "Base de datos beneficiarios Colombia mayor",
//             "mcec-87by": "Tasa de Cambio Representativa del  Mercado -Historico"
//         }
//     },
//     "downloads": {
//         "dates": [
//             "Aug-26",
//             "Sep-2",
//             "Sep-9",
//             "Sep-16"
//         ],
//         "data": [27571, 30484, 30284, 35935]
//     },
//     "trendMostDownloaded": {
//         "dates": [
//             "Aug-26",
//             "Sep-2",
//             "Sep-9",
//             "Sep-16"
//         ],
//         "data": [
//             {
//                 "name": "Economía y Finanzas",
//                 "data": [5965, 7324, 6194, 11022]
//             },
//             {
//                 "name": "OTHERS",
//                 "data": [5718, 6222, 6633, 6756]
//             },
//             {
//                 "name": "Gastos Gubernamentales",
//                 "data": [4421, 5138, 4472, 5198]
//             },
//             {
//                 "name": "Salud y Protección Social",
//                 "data": [3965, 3767, 4899, 4058]
//             },
//             {
//                 "name": "Comercio, Industria y Turismo",
//                 "data": [2053, 2089, 2092, 2102]
//             },
//             {
//                 "name": "Mapas Nacionales",
//                 "data": [1467, 1488, 1593, 1879]
//             },
//             {
//                 "name": "Educación",
//                 "data": [1044, 1435, 1931, 1557]
//             },
//             {
//                 "name": "Transporte",
//                 "data": [1203, 1269, 451, 1486]
//             },
//             {
//                 "name": "Ambiente y Desarrollo Sostenible",
//                 "data": [668, 704, 1023, 1002]
//             },
//             {
//                 "name": "Hacienda y Crédito Público",
//                 "data": [1067, 1048, 996, 875]
//             }
//         ]
//     },
//     "topDownloadedLastWeek": {
//         "assetIds": [
//             "32sa-8pi3",
//             "mcec-87by",
//             "gt2j-8ykr",
//             "xdk5-pm3f",
//             "jbjy-vk9h",
//             "ceyp-9c7c",
//             "kcdt-jbvj",
//             "p6dx-8zbt",
//             "v2r9-hzfj",
//             "gdxc-w37w"
//         ],
//         "data": [6994, 2087, 1642, 1318, 1012, 910, 853, 642, 476, 431],
//         "assetIdNameMap": {
//             "32sa-8pi3": "Tasa de Cambio Representativa del Mercado- TRM",
//             "mcec-87by": "Tasa de Cambio Representativa del  Mercado -Historico",
//             "gt2j-8ykr": "Casos positivos de COVID-19 en Colombia.",
//             "xdk5-pm3f": "Departamentos y municipios de Colombia",
//             "jbjy-vk9h": "SECOP II - Contratos Electrónicos",
//             "ceyp-9c7c": "TRM",
//             "kcdt-jbvj": "RUTAS TRANSPORTE URBANO",
//             "p6dx-8zbt": "SECOP II - Procesos de Contratación",
//             "v2r9-hzfj": "SECOP II - Procesos - 202211",
//             "gdxc-w37w": "DIVIPOLA- Códigos municipios"
//         }
//     },
//     "assetsByType": {
//         "data": [
//             {
//                 "assetId": "federated_href",
//                 "count": 22046
//             },
//             {
//                 "assetId": "dataset",
//                 "count": 9474
//             },
//             {
//                 "assetId": "filter",
//                 "count": 2182
//             },
//             {
//                 "assetId": "chart",
//                 "count": 1022
//             },
//             {
//                 "assetId": "href",
//                 "count": 889
//             },
//             {
//                 "assetId": "map",
//                 "count": 465
//             },
//             {
//                 "assetId": "story",
//                 "count": 273
//             },
//             {
//                 "assetId": "visualization",
//                 "count": 118
//             },
//             {
//                 "assetId": "file",
//                 "count": 57
//             },
//             {
//                 "assetId": "form",
//                 "count": 4
//             },
//             {
//                 "assetId": "calendar",
//                 "count": 2
//             }
//         ]
//     },
//     "assetsByCategory": {
//         "data": [
//             {
//                 "assetId": "UNNAMED",
//                 "count": 22799
//             },
//             {
//                 "assetId": "Función pública",
//                 "count": 3082
//             },
//             {
//                 "assetId": "Salud y Protección Social",
//                 "count": 1513
//             },
//             {
//                 "assetId": "Educación",
//                 "count": 1504
//             },
//             {
//                 "assetId": "Gastos Gubernamentales",
//                 "count": 899
//             },
//             {
//                 "assetId": "Comercio, Industria y Turismo",
//                 "count": 751
//             },
//             {
//                 "assetId": "Ambiente y Desarrollo Sostenible",
//                 "count": 617
//             },
//             {
//                 "assetId": "Agricultura y Desarrollo Rural",
//                 "count": 498
//             },
//             {
//                 "assetId": "Ciencia, Tecnología e Innovación",
//                 "count": 494
//             },
//             {
//                 "assetId": "Transporte",
//                 "count": 430
//             },
//             {
//                 "assetId": "Ordenamiento Territorial",
//                 "count": 414
//             },
//             {
//                 "assetId": "Hacienda y Crédito Público",
//                 "count": 385
//             },
//             {
//                 "assetId": "Vivienda, Ciudad y Territorio",
//                 "count": 371
//             },
//             {
//                 "assetId": "Inclusión Social y Reconciliación",
//                 "count": 360
//             },
//             {
//                 "assetId": "Justicia y Derecho",
//                 "count": 304
//             },
//             {
//                 "assetId": "Minas y Energía",
//                 "count": 302
//             },
//             {
//                 "assetId": "Seguridad y Defensa",
//                 "count": 297
//             },
//             {
//                 "assetId": "Organismos de Control",
//                 "count": 296
//             },
//             {
//                 "assetId": "Estadísticas Nacionales",
//                 "count": 239
//             },
//             {
//                 "assetId": "Participación ciudadana",
//                 "count": 212
//             },
//             {
//                 "assetId": "Cultura",
//                 "count": 205
//             },
//             {
//                 "assetId": "Economía y Finanzas",
//                 "count": 171
//             },
//             {
//                 "assetId": "Deporte y Recreación",
//                 "count": 112
//             },
//             {
//                 "assetId": "Trabajo",
//                 "count": 94
//             },
//             {
//                 "assetId": "Mapas Nacionales",
//                 "count": 90
//             },
//             {
//                 "assetId": "Presupuestos Gubernamentales",
//                 "count": 45
//             },
//             {
//                 "assetId": "geospatial",
//                 "count": 24
//             },
//             {
//                 "assetId": "Estadisticas Nacionales",
//                 "count": 10
//             },
//             {
//                 "assetId": "Resultados Electorales",
//                 "count": 10
//             },
//             {
//                 "assetId": "Demografia y poblacion",
//                 "count": 4
//             }
//         ]
//     },
//     "newRemovedTrend": {
//         "dates": [
//             "Aug-26",
//             "Sep-2",
//             "Sep-9",
//             "Sep-16"
//         ],
//         "data": [
//             {
//                 "name": "Newly published",
//                 "data": [1230, 592, 92, 157]
//             },
//             {
//                 "name": "Removed",
//                 "data": [-5891, -137, -95, -77]
//             }
//         ]
//     }
// }

