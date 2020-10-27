import Chart from "chart.js";

const doughnutDraw = Chart.controllers.doughnut.prototype.draw;

Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    doughnutDraw.apply(this, arguments);
    if (this.chart.config.data.text === undefined) return false;

    const { chart, config } = this.chart;
    const { width: w, height: h, ctx } = chart;
    const { text: t } = config.data;

    ctx.font = "12px sans-serif";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#000000";

    if (t instanceof Array) {
      let y = h / 2 - t.length * 7 + 7;
      t.forEach(l => {
        const { width: tw } = ctx.measureText(l);
        const x = (w - tw) / 2;
        ctx.fillText(l, x, y);
        y += 14;
      });
    } else {
      const { width: tw } = ctx.measureText(t);
      const x = (w - tw) / 2;
      const y = Math.round(h / 2);
      ctx.fillText(t, x, y);
    }
  }
});
