import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { UploadModel } from './upload.model';
import { Constant } from '../../common/constant';
import { UploaderService } from './uploader.service';
import { HttpRequest, HttpResponse, HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.less']
})

export class UploaderComponent implements OnInit {
  @Input() counter: number = 1;
  @Input() limit: number = 0;
  @Input() multiple: boolean = false;
  @Input() fileList: UploadFile[] = [];
  action: string = Constant.URL_UPLOAD_IMAGE;
  previewImage = '';
  previewVisible = false;
  @Output() fileListChange = new EventEmitter<UploadFile[]>();

  constructor(
    private http: HttpClient,
    private msg: NzMessageService,
    private uploaderService: UploaderService) { }

  ngOnInit() {
  }

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }

  handlerRequest = (upload: UploadFile) => {
    this.uploaderService.upload(upload.file).subscribe(resp => {
      console.log(resp);
    },
    err => {
      this.msg.error('failed');
    });
  }

  handleHeaders(info: any) {
  }

  handleChange(info: any): void {
    if (info.file.status === 'done' || info.file.status === 'removed') {
      this.fileListChange.emit(this.fileList);
    }
  }

  handleRemove(): void {
  }
}
