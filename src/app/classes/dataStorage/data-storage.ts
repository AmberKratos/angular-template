export class DataStorage {

  from: string;
  to:string;
  data:object;

  constructor(from:string,to:string,data:object) {
    this.from=from;
    this.to=to;
    this.data=data;
  }

}
