import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DashboardService } from '../../services';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {
  constructor(private service: DashboardService) {}
}
