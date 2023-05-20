import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  getData() {
    return [
        {
            itemImageSrc: 'https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: 'https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2s.jpg',
            alt: 'Description for Image 2',
            title: 'Title 2'
        },
        { 
            itemImageSrc: 'https://www.themealdb.com/images/media/meals/qpqtuu1511386216.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        { 
            itemImageSrc: 'https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4s.jpg',
            alt: 'Description for Image 4',
            title: 'Title 4'
        }, 
        {
            itemImageSrc: 'https://www.themealdb.com/images/media/meals/sxysrt1468240488.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5s.jpg',
            alt: 'Description for Image 5',
            title: 'Title 5'
        }, 
        {
            itemImageSrc: 'https://www.themealdb.com/images/media/meals/wvpvsu1511786158.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria6s.jpg',
            alt: 'Description for Image 6',
            title: 'Title 6'
        },
        { 
            itemImageSrc: 'https://www.themealdb.com/images/media/meals/vpxyqt1511464175.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria7s.jpg',
            alt: 'Description for Image 7',
            title: 'Title 7'
        },
        {
            itemImageSrc: 'https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria8s.jpg',
            alt: 'Description for Image 8',
            title: 'Title 8'
        },
   
    ];
}

getImages() {
  return Promise.resolve(this.getData());
}


}
