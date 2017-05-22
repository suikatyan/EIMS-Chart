"use strict";
class Work {
    constructor(year, month, day, $column) {
        this.date = new Date(`${year}/${month}/${day}`);
        this.$column = $column;
        this.build();
    }
    build() {
        const tds = this.$column.find("td");
        const today = `${this.date.getFullYear()}/${this.date.getMonth() + 1}/${this.date.getDate()}`;
        const startedDate = tds[2].innerText.replace(/\s/g, "");
        if (startedDate) {
            this.startedDate = new Date(`${today} ${startedDate}`);
        }
        const finishedDate = tds[3].innerText.replace(/\s/g, "");
        if (finishedDate) {
            this.finishedDate = new Date(`${today} ${finishedDate}`);
        }
    }
    isOffDay() {
        return this.isSaturday() || this.isSunday() || this.isHoliday();
    }
    isSaturday() {
        return this.date.getDay() === 6;
    }
    isSunday() {
        return this.date.getDay() === 0;
    }
    isHoliday() {
        return this.$column.hasClass("holiday");
    }
    isFilled() {
        return this.startedDate !== undefined && this.finishedDate !== undefined;
    }
    getDate() {
        return this.date;
    }
    getStartedDate() {
        return this.startedDate;
    }
    getFinishedDate() {
        return this.finishedDate;
    }
}
