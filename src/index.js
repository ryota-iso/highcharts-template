async function getData() {
  const response = await fetch(`data.json`);
  return response.json();
}

async function main() {
  const data = await getData();

  Highcharts.chart("container", {
    chart: {
      zooming: { type: "x", }
    },
    title: {
      text: "Highcharts drawing 500k points",
      align: "left",
    },
    tooltip: {
      valueDecimals: 2, // 小数点以下の桁数
    },
    xAxis: {
      type: "datetime",
      plotLines: [{
        color: "red",
        width: 2,
        value: (function () {
          const start = Date.UTC(new Date().getUTCFullYear(), 0, 1) - 500000 * 36e5;
          const end = start + 500000 * 36e5;
          return (start + end) / 2 + (36e5 / 2);
        })(),
        label: {
          text: "Central Line",
          align: "center",
          style: {
            color: "red",
          },
        },
      }],
    },
    series: [{
      data: data,
      lineWidth: 0.5,
      name: "Hourly data points",
    }],
  });
}

main();
