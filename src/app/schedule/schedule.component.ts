import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ScheduleService } from '../services/schedule.service';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  public date: Date;
  public searchText: string;

  constructor(public service: ScheduleService) {}

  ngOnInit() {
    this.date = new Date();
    this.date.setHours(0, 0, 0, 0);
    this.service.refresh(this.date);
  }

  datePickerChanged(event: MatDatepickerInputEvent<Date>) {
    const newDate = event.value;
    console.log(newDate);
    this.date = newDate;
    this.service.refresh(this.date);
  }

}
