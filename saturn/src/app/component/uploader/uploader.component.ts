import { Component, OnInit, Input } from '@angular/core';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { UploadModel } from './upload.model';
import { Constant } from '../../common/constant';
import { UploaderService } from './uploader.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.less']
})

export class UploaderComponent implements OnInit {
  _fileList: Array<UploadModel>;
  @Input() counter: number;
  action: string = Constant.URL_UPLOAD_IMAGE;
  previewImage = '';
  previewVisible = false;

  @Input()
  set fileList(fileList: Array<UploadModel>) {
    this._fileList = fileList || [];
  }
  get fileList(): Array<UploadModel> {
    return this._fileList;
  }
  constructor(private msg: NzMessageService, private uploaderService: UploaderService) { }

  ngOnInit() {
  }

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }

  handlerRequest = (file: UploadFile) => {
    this.uploaderService.upload(file).subscribe(resp => {
      console.log(resp);
    },
    err => {
      this.msg.error('failed');
    });
  }
}
