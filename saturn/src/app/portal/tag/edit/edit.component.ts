import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { TagModel } from '../tag.model';
import { NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {

  tagForm: FormGroup;
  tagModel: TagModel;
  isEdit: boolean = false;
  haveChangedInfo = true;

  constructor(
    private formBuilder: FormBuilder,
    private modal: NzModalRef) { }

  ngOnInit() {
  }

  @Input() set tagInfo(value: TagModel) {
    this.tagModel = value || new TagModel();
    if (value !== undefined) {
      this.isEdit = true;
    }
    this.haveChangedInfo = false;
    this.buildForm();
  }

  buildForm() {
    this.tagForm = this.formBuilder.group({
      'code': [
        this.tagModel.code,
        [Validators.required]
      ],
      'name': [
        this.tagModel.name,
        [Validators.required]
      ],
      'desc': [
        this.tagModel.desc,
        []
      ]
    });
  }

  add() {
    if (this.isEdit) {
      this.tagForm.value._id = this.tagModel._id;
    }
    this.modal.close({tag: this.tagForm.value, isEdit: this.isEdit});
  }

  cancel() {
    this.modal.destroy();
  }
}
