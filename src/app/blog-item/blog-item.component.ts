import { Component, OnInit } from '@angular/core';
import { BlogItemMeta } from '../services/blog/blog-item';
import { BlogCategory } from '../services/blog/blog-category.enum';

@Component({
    selector: 'app-blog-item',
    templateUrl: './blog-item.component.html',
    styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

    public image: string;
    public datePublished: string;
    public category: string; // add category class
    public commentCount: number;
    public metaData: BlogItemMeta;
    constructor() { }

    ngOnInit(): void {
        this.image = ''; // 'https://post.healthline.com/wp-content/uploads/2019/09/Female_Yoga_1296x728-header-1296x728.jpg';
        this.datePublished = '2016-05-17';
        this.category = 'Asana';
        this.commentCount = 0;
        this.metaData = new BlogItemMeta({
            category: BlogCategory.ASANA,
            author: 'User',
            title: 'First step on your mat',
            description: 'this is a description',
            commentCount: 2
        });
        console.log('meta', this.metaData);
    }

}
