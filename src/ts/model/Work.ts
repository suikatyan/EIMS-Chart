class Work {
  private date: Date;
  private $column: JQuery;
  private startedDate: Date;
  private finishedDate: Date;

  constructor (year: number, month: number, day: number, $column: JQuery) {
    this.date = new Date(`${year}/${month}/${day}`);
    this.$column = $column;

    this.build();
  }

  private build() : void {
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

    // this.content = tds[4].innerText.replace(/\s/g, "");
    // this.holiday = tds[5].innerText.replace(/\s/g, "");
    // this.reason = tds[6].innerText.replace(/\s/g, "");
    // this.money = tds[7].innerText.replace(/\s/g, "");
  }

  isOffDay () : boolean {
    return this.isSaturday() || this.isSunday() || this.isHoliday();
  }

  isSaturday() : boolean {
    return this.date.getDay() === 6;
  }

  isSunday() : boolean {
    return this.date.getDay() === 0;
  }

  isHoliday() : boolean {
    return this.$column.hasClass("holiday");
  }

  isFilled() : boolean {
    return this.startedDate !== undefined && this.finishedDate !== undefined;
  }

  getDate() : Date {
    return this.date;
  }

  getStartedDate() : Date {
    return this.startedDate;
  }

  getFinishedDate() : Date {
    return this.finishedDate;
  }

}
