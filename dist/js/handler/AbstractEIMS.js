"use strict";
class AbstractEIMS {
    constructor() {
        this.workMap = new Map();
    }
    build() {
        if (!this.isTargetPage()) {
            return;
        }
        const $table = this.fetchTable();
        if ($table.length === 0) {
            return;
        }
        this.date = this.fetchDate($table);
        const [year, month] = [this.date.getFullYear(), this.date.getMonth() + 1];
        $table.find("tr").each((index, column) => {
            const $column = $(column);
            const d = $column.find("td:first").text().match(/\d+/);
            if (d === null) {
                return true;
            }
            const day = Number(d[0]);
            this.workMap.set(day, new Work(year, month, day, $column));
        });
    }
    getDate() {
        return this.date;
    }
    getWorkMap() {
        return this.workMap;
    }
}
