import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-progress',
	templateUrl: './progress.component.html',
	styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

	@Input() percentage = 0;
	displayPercentage = 0;
	circumference = 31.41592;

	strokeDash = 0;

	dashArray = '0 31.4';

	ngOnInit() {
		this.calculateDash();
		this.setDisplayPercentage();
	}

	public calculateDash() {
		this.strokeDash = (Math.round((this.percentage * this.circumference) / 10) / 10);
		this.dashArray = this.strokeDash.toString() + ' ' + this.circumference.toString();
	}

	public setDisplayPercentage() {
		this.displayPercentage = Math.round(this.percentage);
	}

}
