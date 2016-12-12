import { Component, OnInit } from '@angular/core';
import { CarouselImage } from '../carousel-image';

@Component({
    selector: 'carousel-component',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
    public images = IMAGES;
}

var IMAGES: CarouselImage[] = [
    { "title": "Colors", "url": "http://lorempixel.com/output/abstract-q-c-1227-804-7.jpg"},
    { "title": "Lights", "url": "http://lorempixel.com/output/abstract-q-c-1227-804-4.jpg"},
    { "title": "Patterns", "url": "http://lorempixel.com/output/abstract-q-c-1227-804-10.jpg"}
];