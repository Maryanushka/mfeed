import { Component, Input, OnInit } from '@angular/core';
import { IBackendErrors } from '../../../../types/backendError.interface';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss']
})
export class BackendErrorMessagesComponent implements OnInit {
	@Input("backendErrors") backendErrorsProps: IBackendErrors; 

	errorMessages: string[]

	ngOnInit(): void {
			this.errorMessages = Object.keys(this.backendErrorsProps).map((name: string) => {
				const messages = this.backendErrorsProps[name].join(', ')
				return `${name} ${messages}`
			})
	}
}
