"use strict";
class EIMSChart {
    initialize() {
        this.eims = new EIMSWork();
        this.eims.build();
        this.showChart(this.getData(this.eims.getWorkMap()));
    }
    getData(workMap) {
        return {};
    }
    putWrapper() {
        const html = `<div id='${EIMSChart.WRAPPER_NAME}'></div>`;
        return $(html).insertAfter(".page-header").hide().slideDown(400);
    }
    showChart(data) {
        const $wrapper = this.putWrapper();
    }
}
EIMSChart.WRAPPER_PREFIX = "eims-chart-";
EIMSChart.WRAPPER_NAME = EIMSChart.WRAPPER_PREFIX + "wapper";
