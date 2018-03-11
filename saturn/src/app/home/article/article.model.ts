export class ArticleModel {
    id: number;
    title: string;
    desc: string;
    body: string;
    createDate: Date;
    updateDate: Date;
    createBy: String;
    updateBy: String;
}

export class ArticlePagination {
    total: number;
    articles: ArticleModel[];
}
