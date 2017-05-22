class EIMSWork extends AbstractEIMS {
  protected isTargetPage() :boolean {
    return window.location.href.includes("eims.tes.co.jp/portal/diligences/view");
  }

  protected fetchTable() :JQuery {
    return $(".diligence");
  }

  protected fetchDate($table: JQuery) :Date {
    const title = $table.find(".title").text().match(/(\d+)年(\d+)月/);
    if (title === null) {
      return null;
    }

    return new Date(`${title[1]}/${title[2]}/1`);
  }
}
