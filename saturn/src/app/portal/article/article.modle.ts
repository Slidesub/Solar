import { UploadModel } from '../../component/uploader/upload.model';
import { TagModel } from '../tag/tag.model';

export class ArticleModel {
    _id: string;
    title: string;
    desc: string;
    icon: Array<UploadModel>;
    body: string;
    tags: Array<any>;
    author: string;
    checked: boolean;
}
