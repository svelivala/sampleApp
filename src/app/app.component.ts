import { Component} from "@angular/core";
import { Product} from "./customer";
import { CustomerService } from "./customerservice";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  providers: [MessageService]
})
export class AppComponent {
  products: Product[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getCustomersLarge().then(data => {
      this.products = data;
    });
  }
    
}
