import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-svg',
  imports: [NgSwitch, NgSwitchCase],
  templateUrl: './common-svg.html',
  styleUrl: './common-svg.scss',
})
export class CommonSvg {
  @Input() type!: string;
}
