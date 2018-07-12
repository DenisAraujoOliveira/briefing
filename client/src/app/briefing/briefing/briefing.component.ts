import { Component,Input } from '@angular/core';
import { AgencyBrief } from '../AgencyBrief';
import { Campanha } from '../../campanha/campanha';

@Component({
  selector: 'briefing',
  templateUrl: './briefing.component.html',
  styleUrls: ['./briefing.component.css']
})
export class BriefingComponent {
  @Input() agencyBrief: AgencyBrief;
  @Input() campanha: Campanha;
}
