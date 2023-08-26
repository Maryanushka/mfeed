import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistanceService {
	set(key: string, data: any): void {
		try {
			localStorage.setItem(key, JSON.stringify(data))
		} catch (error) {
			console.log("Error saving to LocalStorage");
		}
	}
	get(key: string) {
		try {
			return JSON.parse(localStorage.getItem(key))	
		} catch (error) {
			console.log("Error getting data from LocalStorage");
			return null
		}
	}
}
