/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ApplicationRef, ComponentRef, InjectionToken } from '@angular/core';
import { ExtraOptions, RouterPreloader } from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';
/**
 * @whatItDoes Creates an initializer that in addition to setting up the Angular
 * router sets up the ngRoute integration.
 *
 * @howToUse
 *
 * ```
 * @NgModule({
 *  imports: [
 *   RouterModule.forRoot(SOME_ROUTES),
 *   UpgradeModule
 * ],
 * providers: [
 *   RouterUpgradeInitializer
 * ]
 * })
 * export class AppModule {
 *   ngDoBootstrap() {}
 * }
 * ```
 *
 * @experimental
 */
export declare const RouterUpgradeInitializer: {
    provide: InjectionToken<(compRef: ComponentRef<any>) => void>;
    useFactory: (ngUpgrade: UpgradeModule, ref: ApplicationRef, preloader: RouterPreloader, opts: ExtraOptions) => Function;
    deps: (typeof UpgradeModule | typeof ApplicationRef | typeof RouterPreloader | InjectionToken<ExtraOptions>)[];
};
/**
 * @whatItDoes Sets up a location synchronization.
 *
 * History.pushState does not fire onPopState, so the angular2 location
 * doesn't detect it. The workaround is to attach a location change listener
 *
 * @experimental
 */
export declare function setUpLocationSync(ngUpgrade: UpgradeModule): void;
