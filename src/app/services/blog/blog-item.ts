import { BlogCategory } from './blog-category.enum';

export class BlogItemMeta {
    public title: string;
    public author: string;
    public date: string;
    public category: BlogCategory;
    public commentCount: number;
    public description: string;

    constructor(obj: any) {
        if (obj) {
            this.title = obj.title || '';
            this.description = obj.description || '';
            this.author = obj.author || '';
            this.date = obj.date || new Date().toJSON().substring(0, 10);
            this.category = obj.category || '';
            this.commentCount = obj.commentCount || 0;
        }
    }
}

