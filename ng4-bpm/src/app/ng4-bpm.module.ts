import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Ng4BpmConfig} from "./ng4-bpm/config";
import {Ng4BpmComponent} from './ng4-bpm/ng4-bpm.component';
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import { Ng4CoreModule } from "ng4-core";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    Ng4CoreModule.forRoot({})
  ],
  declarations: [Ng4BpmComponent],
  exports: [Ng4BpmComponent],
})
export class Ng4BpmModule {

  /* optional: in case you need users to override your providers */
  static forRoot(config?: Ng4BpmConfig): ModuleWithProviders {
    return {
      ngModule: Ng4BpmModule,
      providers: [
        {provide: 'NG4BPM_CONFIG', useValue: config}
      ],
    };
  }

}
