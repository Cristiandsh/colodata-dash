// scripts.js
document.addEventListener("DOMContentLoaded", async function () {

    document.querySelectorAll('.spinner-border').forEach(el => el.classList.remove('hidden'));

    try {
        const colodataRes = await fetchData();

        document.querySelectorAll('.spinner-border').forEach(el => el.classList.add('hidden'));

        const colors = [
            '#3B93A5',
            '#F7B844',
            '#ADD8C7',
            '#EC3C65',
            '#CDD7B6',
            '#C1F666',
            '#D43F97',
            '#1E5D8C',
            '#421243',
            '#7F94B0',
            '#EF6537',
            '#C0ADDB'
        ]

        valuesFormatter = function (value) {
            var val = Math.abs(value)
            if (val >= 1000) {
                val = (val / 1000).toFixed(1) + 'k'
            }
            return val
        }

        var visitsOptions = {
            series: [
                {
                    name: "Visits",
                    data: colodataRes['visits']['data']
                }
            ],
            chart: {
                height: 215,
                type: 'area',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            grid: {
                padding: {
                    left: 20
                }
            },
            colors: colors,
            dataLabels: {
                enabled: true,
                formatter: valuesFormatter

            },
            stroke: {
                curve: 'smooth'
            },
            markers: {
                size: 1
            },
            xaxis: {
                categories: colodataRes['visits']['dates']
            },
            yaxis: {
                show: false,
                min: Math.min(...colodataRes['visits']['data']) * 0.85,
                max: Math.max(...colodataRes['visits']['data']) * 1.15,
                labels: {
                    formatter: valuesFormatter
                }
            }
        };

        var trendMostViewedOptions = {
            series: colodataRes['trendMostViewed']['data'],
            chart: {
                height: 215,
                type: 'line',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            grid: {
                padding: {
                    top: 10
                }
            },
            colors: colors,
            stroke: {
                curve: 'smooth'
            },
            markers: {
                size: 5
            },
            xaxis: {
                categories: colodataRes['trendMostViewed']['dates']
            },
            yaxis: {
                min: Math.floor(Math.min(...colodataRes['trendMostViewed']['data'].flatMap((item) => item['data'])) * 0.85),
                max: Math.ceil(Math.max(...colodataRes['trendMostViewed']['data'].flatMap((item) => item['data'])) * 1.15),
                labels: {
                    formatter: valuesFormatter
                }
            },
            legend: {
                show: false
            }
        };

        var topViewedLastWeekOptions = {
            series: [{
                data: colodataRes['topViewedLastWeek']['data']
            }],
            chart: {
                type: 'bar',
                height: 215,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    borderRadiusApplication: 'end',
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#3B93A5', '#EC3C65'],
            xaxis: {
                categories: colodataRes['topViewedLastWeek']['assetIds'],
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: undefined,
                    title: {
                        formatter: (_series, seriesIndex) => {
                            const resourceNames = Object.values(colodataRes['topViewedLastWeek']['assetIdNameMap']);
                            return resourceNames[seriesIndex.dataPointIndex];
                        },
                    },
                }
            }
        };

        var downloadsOptions = {
            series: [
                {
                    name: "Downloads",
                    data: colodataRes['downloads']['data']
                }
            ],
            chart: {
                height: 215,
                type: 'area',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            grid: {
                padding: {
                    left: 20
                }
            },
            colors: colors,
            dataLabels: {
                enabled: true,
                formatter: valuesFormatter
            },
            stroke: {
                curve: 'smooth'
            },
            markers: {
                size: 1
            },
            xaxis: {
                categories: colodataRes['downloads']['dates']
            },
            yaxis: {
                show: false,
                min: Math.min(...colodataRes['downloads']['data']) * 0.85,
                max: Math.max(...colodataRes['downloads']['data']) * 1.15,
                labels: {
                    formatter: valuesFormatter
                }
            }
        };

        var trendMostDownloadedOptions = {
            series: colodataRes['trendMostDownloaded']['data'],
            chart: {
                height: 215,
                type: 'line',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            grid: {
                padding: {
                    top: 10
                }
            },
            colors: colors,
            stroke: {
                curve: 'smooth'
            },
            markers: {
                size: 5
            },
            xaxis: {
                categories: colodataRes['trendMostDownloaded']['dates']
            },
            yaxis: {
                min: Math.floor(Math.min(...colodataRes['trendMostDownloaded']['data'].flatMap((item) => item['data'])) * 0.85),
                max: Math.ceil(Math.max(...colodataRes['trendMostDownloaded']['data'].flatMap((item) => item['data'])) * 1.15),
                labels: {
                    formatter: valuesFormatter
                }
            },
            legend: {
                show: false
            }
        };

        var topDownloadedLastWeekOptions = {
            series: [{
                data: colodataRes['topDownloadedLastWeek']['data']
            }],
            chart: {
                type: 'bar',
                height: 215,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    borderRadiusApplication: 'end',
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#3B93A5', '#EC3C65'],
            xaxis: {
                categories: colodataRes['topDownloadedLastWeek']['assetIds'],
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: undefined,
                    title: {
                        formatter: (_series, seriesIndex) => {
                            const resourceNames = Object.values(colodataRes['topDownloadedLastWeek']['assetIdNameMap']);
                            return resourceNames[seriesIndex.dataPointIndex];
                        },
                    },
                }
            }
        };

        var assetsByTypeOptions = {
            series: [
                {
                    data: colodataRes['assetsByType']['data'].map((item) => ({ x: item['assetId'], y: item['count'] }))
                }
            ],
            legend: {
                show: false
            },
            chart: {
                height: 215,
                type: 'treemap',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            colors: colors,
            plotOptions: {
                treemap: {
                    distributed: true,
                    enableShades: false
                }
            }
        };

        var assetsByCategoryOptions = {
            series: [
                {
                    data: colodataRes['assetsByCategory']['data'].map((item) => ({ x: item['assetId'], y: item['count'] }))
                }
            ],
            legend: {
                show: false
            },
            chart: {
                height: 215,
                type: 'treemap',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            colors: colors,
            plotOptions: {
                treemap: {
                    distributed: true,
                    enableShades: false
                }
            }
        };

        var newRemovedTrendOptions = {
            series: colodataRes['newRemovedTrend']['data'],
            chart: {
                type: 'bar',
                height: 215,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded',
                    dataLabels: {
                        position: 'top'
                    }
                },
            },
            colors: ['#3B93A5', '#EC3C65'],
            dataLabels: {
                enabled: true,
                style: {
                    colors: ['#333']
                },
                offsetY: -20
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            yaxis: {
                min: Math.floor(Math.min(...colodataRes['newRemovedTrend']['data'].flatMap((item) => item['data'])) * 1.5),
                max: Math.ceil(Math.max(...colodataRes['newRemovedTrend']['data'].flatMap((item) => item['data'])) * 1.5),
                labels: {
                    formatter: valuesFormatter
                }
            },
            xaxis: {
                categories: colodataRes['newRemovedTrend']['dates'],
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                shared: true,
                intersect: false
            }
        };

        // Initialize charts

        setTimeout(() => {
            var chart = new ApexCharts(document.getElementById("visits"), visitsOptions);
            chart.render();
        }, 100);

        setTimeout(() => {
            var chart = new ApexCharts(document.getElementById("trendMostViewed"), trendMostViewedOptions);
            chart.render();
        }, 100);

        setTimeout(() => {
            var chart = new ApexCharts(document.getElementById("downloads"), downloadsOptions);
            chart.render();
        }, 100);

        setTimeout(() => {
            var chart = new ApexCharts(document.getElementById("trendMostDownloaded"), trendMostDownloadedOptions);
            chart.render();
        }, 100);

        setTimeout(() => {
            var chart = new ApexCharts(document.getElementById("topViewedLastWeek"), topViewedLastWeekOptions);
            chart.render();
        }, 100);

        setTimeout(() => {
            var chart = new ApexCharts(document.getElementById("topDownloadedDatasets"), topDownloadedLastWeekOptions);
            chart.render();
        }, 100);

        setTimeout(() => {
            var chart = new ApexCharts(document.getElementById("assetsByType"), assetsByTypeOptions);
            chart.render();
        }, 100);

        setTimeout(() => {
            var chart = new ApexCharts(document.getElementById("assetsByCategory"), assetsByCategoryOptions);
            chart.render();
        }, 100);

        setTimeout(() => {
            var chart = new ApexCharts(document.getElementById("newRemovedTrend"), newRemovedTrendOptions);
            chart.render();
        }, 100);

    } catch {
        console.error('Error fetching data:', error);
    };
});
