export class ArticleModel {
    id: string;
    title: string;
    desc: string;
    icon: any;
    tags: string[];
    body: string;
    created_at: Date;
    updated_at: Date;
    created_by: String;
    updated_by: String;
}

export class ArticlePagination {
    total: number;
    articles: ArticleModel[];
}
