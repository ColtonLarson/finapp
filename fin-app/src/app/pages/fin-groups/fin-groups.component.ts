import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { groupsExample } from '../../../shared/fin-constants';

@Component({
  selector: 'app-fin-groups',
  templateUrl: './fin-groups.component.html',
  styleUrls: ['./fin-groups.component.scss']
})
export class FinGroupsComponent implements OnInit {
  groupForm: FormGroup;
  groups: string[];
  displayedColumns = [ 'name' ];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.groupForm = this.fb.group({
      name: [''],
      color: ['']
    });
    this.groups = groupsExample;
  }

  addGroup(groupName: string) {
    this.groups = [...this.groups, groupName];
  }
}
