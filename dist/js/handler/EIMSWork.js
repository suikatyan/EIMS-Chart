"use strict";
class EIMSWork extends AbstractEIMS {
    isTargetPage() {
        return window.location.href.includes("eims.tes.co.jp/portal/diligences/view");
    }
    fetchTable() {
        return $(".diligence");
    }
    fetchDate($table) {
        const title = $table.find(".title").text().match(/(\d+)年(\d+)月/);
        if (title === null) {
            return null;
        }
        return new Date(`${title[1]}/${title[2]}/1`);
    }
}
