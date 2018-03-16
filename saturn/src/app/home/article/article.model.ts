export class ArticleModel {
    id: number;
    title: string;
    desc: string;
    icon: any;
    body: string;
    tags: number[];
    created_at: Date;
    updated_at: Date;
    created_by: String;
    updated_by: String;
}

export class ArticlePagination {
    total: number;
    articles: ArticleModel[];
}
