import { InjectionToken } from "@angular/core";

export const TOKEN = new InjectionToken<string>('String value', {
    providedIn: 'root',
    factory: () => 'SharedModule'
})