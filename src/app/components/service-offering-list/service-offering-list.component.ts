import { Component, OnInit } from '@angular/core';
import { ServiceOffering } from 'src/app/common/service-offering';
import { ServiceOfferingService } from 'src/app/services/service-offering.service';

@Component({
  selector: 'app-service-offering-list',
  templateUrl: './service-offering-list.component.html',
  styleUrls: ['./service-offering-list.component.css']
})
export class ServiceOfferingListComponent implements OnInit {

  serviceOfferings: ServiceOffering[] = [];

  constructor(private serviceOfferingService: ServiceOfferingService) { }

  ngOnInit(): void {
    this.listServiceOfferings();

  }

  listServiceOfferings() {
    this.serviceOfferingService.getServiceList().subscribe(
      data => {
        this.serviceOfferings = data;
      }


    )

  }

}
