class EIMSChart {
  static readonly WRAPPER_PREFIX = "eims-chart-";
  static readonly WRAPPER_NAME = EIMSChart.WRAPPER_PREFIX + "wapper";

  private eims: AbstractEIMS;

  public initialize() {
    this.eims = new EIMSWork();
    this.eims.build();
    this.showChart(this.getData(this.eims.getWorkMap()));
  }

  private getData(workMap : Map<number, Work>) : Object {

    return {};
  }

  private putWrapper() : JQuery {
    const html = `<div id='${EIMSChart.WRAPPER_NAME}'></div>`;
    return $(html).insertAfter(".page-header").hide().slideDown(400);
  }

  private showChart (data: Object) : void {
    const $wrapper = this.putWrapper();

  }
}
// トランスパイルするときは、「Ctrl + Shift + P」で「run tasks」→「tsc」を実行
// あるいは、「Ctrl + Shift + B」
