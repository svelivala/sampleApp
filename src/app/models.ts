export interface licence {
    name:string,
    consumed:number,
    deliveryHead: string,
    column1:string
  }
  export interface employee {
    name:string,
    machine:string,
    email: string,
    manager:string
  }
  export interface sorted {
    name:string,
    consumed?:number,
    machine?:string,
    email?: string,
    manager?:string,
    column1?:string
  }