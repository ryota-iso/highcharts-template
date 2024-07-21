import { Hono } from "hono";
import { serveStatic } from "hono/deno";

const app = new Hono();

app.get("/", (c) => {
  return c.html(
    <html>
      <head>
        <script src="./highcharts/highcharts.js"></script>
        <script src="./highcharts/boost.js"></script>
        <script src="./highcharts/exporting.js"></script>
        <script src="./highcharts/accessibility.js">
        </script>
        <style>
          {`
            *{
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              font-family: -apple-system,BlinkMacSystemFont,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif,"Segoe UI Emoji";
              box-sizing: border-box;
            }
            .warper {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 100svb;
            }
            .highcharts-figure {
              max-width: 800px;
            }
          `}
        </style>
      </head>
      <body>
        <div class="warper">
          <figure class="highcharts-figure">
            <div id="container"></div>
            {
              /* <p class="highcharts-description">
              Using the Highcharts Boost module, it is possible to render large
              amounts of data on the client side. This chart shows a line series
              with 500,000 data points. The points represent hourly data since
              1965. Click and drag in the chart to zoom in.
            </p> */
            }
          </figure>
        </div>
        <script src="./index.js"></script>
      </body>
    </html>,
  );
});

app.get("/*", serveStatic({ root: "./src/" }));

export default app;
