export class ArticleModel {
    articleId: string;
    title: string;
    body: string;
    createDate: Date;
    updateDate: Date;
    createBy: String;
    updateBy: String;
    checked: boolean;
}

export class ArticlePagination {
    total: number;
    articles: ArticleModel[];
}
