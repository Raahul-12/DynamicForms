import { Component, EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
import { UploaderOptions, UploadInput, UploadOutput } from 'ngx-uploader';

export interface PeriodicElement {
  name: string;
  position: any;
  weight: any;
  symbol: string;
  addicon: any;
}
export interface likertElement {
  name: string;
  // position: any;
  option1: any;
  option2: string;
  option3: string;
  option4: any;
  addicon: any;
}
const LIKERT_DATA: likertElement[] = [
  { name: 'statement1', option1: 'option1', option2: 'H', option3: 'option3', option4: '', addicon: '' }
];

const ELEMENT_DATA: PeriodicElement[] = [
  { position: '', name: '', weight: '', symbol: '', addicon: '' }
];


@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {
  
  tabs = ['Page 1'];
  SubTagFormGroup: FormGroup;
  // DynamicFields:FormArray;
  uploadInput: EventEmitter<UploadInput>;
  upload: any;
  showremovebtn: boolean = false;
  flagupload: boolean = false;
  files1: any = [];
  filename: any;
  commonfilename: any;
  dragOver: boolean;
  selected = new FormControl(0);
  options: UploaderOptions;
  commonflagupload: boolean = false;
  descriptionfilename: any;
  descriptionflagupload: boolean = false;
  choicefilename: any;
  choiceflagupload: boolean = false;
  checkboxfilename: any;
  checkboxflagupload: boolean = false;
  datefilename: any;
  dateflagupload: boolean = false;
  timefilename: any;
  timeflagupload: boolean = false;
  attachmentfilename: any;
  attachmentflagupload: boolean = false;
  attach2filename: any;
  attach2flagupload: boolean = false;
  ratingsfilename: any;
  ratingsflagupload: boolean = false;
  netpromofilename: any;
  netpromoflagupload: boolean = false;
  likertfilename: any;
  likertflagupload: boolean = false;
  DynamicFields: FormArray;
  constructor(private _form: FormBuilder) { }
  ngOnInit(): void {
    this.InitializationFormGroup();
  }
  likertColumns: string[] = ['name', 'option1', 'option2', 'option3', 'option4', 'addicon'];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'addicon'];

  dataSource = ELEMENT_DATA;
  likertdataSource = LIKERT_DATA;

  files: File[] = [];

  onSelect(event: { addedFiles: any; }) {
    console.log(event);
    // this.files.push(...event.addedFiles);
  }
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring'];
  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }
  InitializationFormGroup(): void {
    this.SubTagFormGroup = this._form.group({
      'DynamicFields': this._form.array([this.createItem()])
    })
  }
  createItem(): FormGroup {
    return this._form.group({
      name: ['']
    });
  }
  addItem(): void {
    // this.DynamicFields = this.SubTagFormGroup.get('DynamicFields') as FormArray;
    // this.DynamicFields.push(this.createItem());
    (this.SubTagFormGroup.get('DynamicFields') as FormArray).push(
      this._form.control(null)
    );
  }
  getPhonesFormControls(): AbstractControl[] {
    return (<FormArray>this.SubTagFormGroup.get('DynamicFields')).controls
  }
  remove() {
    this.flagupload = false;
    this.filename = ''
  }
  commonnameremove() {
    this.commonflagupload = false;
    this.commonfilename = '';
  }
  descremove() {
    this.descriptionflagupload = false;
    this.descriptionfilename = '';
  }
  choiceremove() {
    this.choiceflagupload = false;
    this.choicefilename = ''
  }
  checkboxremove() {
    this.checkboxflagupload = false;
    this.checkboxfilename = ''
  }
  dateremove() {
    this.dateflagupload = false;
    this.datefilename = ''
  }
  timeremove() {
    this.timeflagupload = false;
    this.timefilename = ''
  }
  attachmentremove() {
    this.attachmentflagupload = false;
    this.attachmentfilename = ''
  }
  attach2remove() {
    this.attach2flagupload = false;
    this.attach2filename = ''
  }
  ratingsremove() {
    this.ratingsflagupload = false;
    this.ratingsfilename = ''
  }
  netpromoremove() {
    this.netpromoflagupload = false;
    this.netpromofilename = ''
  }
  likertremove() {
    this.likertflagupload = false;
    this.likertfilename = ''
  }





  handleFileInput(files: any) {
    this.filename = files.target.files[0].name;
    this.flagupload = true;
    files.target.value = null;
  }
  commonnameFileInput(files: any) {
    this.commonfilename = files.target.files[0].name;
    this.commonflagupload = true;
    files.target.value = null;
  }
  descriptionFileInput(files: any) {
    this.descriptionfilename = files.target.files[0].name;
    this.descriptionflagupload = true;
    files.target.value = null;
  }
  choiceFileInput(files: any) {
    this.choicefilename = files.target.files[0].name;
    this.choiceflagupload = true;
    files.target.value = null;
  }
  checkboxFileInput(files: any) {
    this.checkboxfilename = files.target.files[0].name;
    this.checkboxflagupload = true;
    files.target.value = null;
  }
  dateFileInput(files: any) {
    this.datefilename = files.target.files[0].name;
    this.dateflagupload = true;
    files.target.value = null;
  }
  timeFileInput(files: any) {
    this.timefilename = files.target.files[0].name;
    this.timeflagupload = true;
    files.target.value = null;
  }
  attachmentFileInput(files: any) {
    this.attachmentfilename = files.target.files[0].name;
    this.attachmentflagupload = true;
    files.target.value = null;
  }
  attach2FileInput(files: any) {
    this.attach2filename = files.target.files[0].name;
    this.attach2flagupload = true;
    files.target.value = null;
  }
  ratingsFileInput(files: any) {
    this.ratingsfilename = files.target.files[0].name;
    this.ratingsflagupload = true;
    files.target.value = null;
  }
  netpromoFileInput(files: any) {
    this.netpromofilename = files.target.files[0].name;
    this.netpromoflagupload = true;
    files.target.value = null;
  }
  likertFileInput(files: any) {
    this.likertfilename = files.target.files[0].name;
    this.likertflagupload = true;
    files.target.value = null;
  }




  onUploadOutput(output: UploadOutput): void {
    switch (output.type) {
      case 'allAddedToQueue':
        break;
      case 'addedToQueue':
        if (typeof output.file !== 'undefined') {
          this.flagupload = true;
          // this.filename = output.file?.name;
          // this.showremovebtn = true;
        }
        break;
    }
  }
  commonnameUploadOutput(output: UploadOutput): void {
    switch (output.type) {
      case 'allAddedToQueue':
        break;
      case 'addedToQueue':
        if (typeof output.file !== 'undefined') {
          this.commonflagupload = true;
          // this.commonfilename = output.file?.name;
          // this.showremovebtn = true;
        }
        break;
    }
  }
  DescriptionUploadOutput(output: UploadOutput): void {
    switch (output.type) {
      case 'allAddedToQueue':
        break;
      case 'addedToQueue':
        if (typeof output.file !== 'undefined') {
          this.commonflagupload = true;
          // this.commonfilename = output.file?.name;
          // this.showremovebtn = true;
        }
        break;
    }
  }
  choiceUploadOutput(output: UploadOutput): void {
    switch (output.type) {
      case 'allAddedToQueue':
        break;
      case 'addedToQueue':
        if (typeof output.file !== 'undefined') {
          this.choiceflagupload = true;
          // this.choicefilename = output.file?.name;
          // this.showremovebtn = true;
        }
        break;
    }
  }
  checkboxUploadOutput(output: UploadOutput): void {
    switch (output.type) {
      case 'allAddedToQueue':
        break;
      case 'addedToQueue':
        if (typeof output.file !== 'undefined') {
          this.checkboxflagupload = true;
          // this.checkboxfilename = output.file?.name;
          // this.showremovebtn = true;
        }
        break;
    }
  }
  dateUploadOutput(output: UploadOutput): void {
    switch (output.type) {
      case 'allAddedToQueue':
        break;
      case 'addedToQueue':
        if (typeof output.file !== 'undefined') {
          this.dateflagupload = true;
          // this.datefilename = output.file?.name;
          // this.showremovebtn = true;
        }
        break;
    }
  }
  timeUploadOutput(output: UploadOutput): void {
    switch (output.type) {
      case 'allAddedToQueue':
        break;
      case 'addedToQueue':
        if (typeof output.file !== 'undefined') {
          this.timeflagupload = true;
          // this.timefilename = output.file?.name;
          // this.showremovebtn = true;
        }
        break;
    }
  }
  attachmentUploadOutput(output: UploadOutput): void {
    switch (output.type) {
      case 'allAddedToQueue':
        break;
      case 'addedToQueue':
        if (typeof output.file !== 'undefined') {
          this.attachmentflagupload = true;
          // this.attachmentfilename = output.file?.name;
          // this.showremovebtn = true;
        }
        break;
    }
  }
  attach2UploadOutput(output: UploadOutput): void {
    switch (output.type) {
      case 'allAddedToQueue':
        break;
      case 'addedToQueue':
        if (typeof output.file !== 'undefined') {
          this.attach2flagupload = true;
          // this.attach2filename = output.file?.name;
          // this.showremovebtn = true;
        }
        break;
    }
  }
  ratingsUploadOutput(output: UploadOutput): void {
    switch (output.type) {
      case 'allAddedToQueue':
        break;
      case 'addedToQueue':
        if (typeof output.file !== 'undefined') {
          this.ratingsflagupload = true;
          // this.ratingsfilename = output.file?.name;
          // this.showremovebtn = true;
        }
        break;
    }
  }
  netpromoUploadOutput(output: UploadOutput): void {
    switch (output.type) {
      case 'allAddedToQueue':
        break;
      case 'addedToQueue':
        if (typeof output.file !== 'undefined') {
          this.netpromoflagupload = true;
          // this.netpromofilename = output.file?.name;
          // this.showremovebtn = true;
        }
        break;
    }
  }
  likertUploadOutput(output: UploadOutput): void {
    switch (output.type) {
      case 'allAddedToQueue':
        break;
      case 'addedToQueue':
        if (typeof output.file !== 'undefined') {
          this.likertflagupload = true;
          // this.likertfilename = output.file?.name;
          // this.showremovebtn = true;
        }
        break;
    }
  }
}
