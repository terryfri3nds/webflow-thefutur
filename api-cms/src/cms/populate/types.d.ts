export interface Product {
  id: number;
  name: string;
  price: string;
  "short-description": string;
  instructor: People;
  "thumbnail-16x9": ImageField;
  "thumbnail-square": ImageField;
  rating: Rating;
  slug: string;
}

export interface Testimonial {
  id: number;
  name: string;
  "quote-on-big-text": string;
  "master-mind-testimonial": string;
  "person-reference": People;
  "personal-website": string;
  slug: string;
  "twitter-handle": string;
  "tweet-post": string;
  "link-to-tweet": string;
  testimonial: string;
}



export interface Metadata {
  width: number,
  height: number,
  html: string;
  aspectRatio: number,
  title: string;
  provider_name: string;
  type: string;
  thumbnail_url: string;
  description: string;
  author_name: string;
 
}

export interface People {
  id: number;
  name: string;
  photo: ImageField;
  "thumbnail-photo-small": ImageField;  
  "header-photo": ImageField;
  "short-bio": string;
  slug: string;
}

export interface Content {
  id: number;
  name: string;
  "video-link-video": VideoField;
  author: string;
  thumbnail: ImageField;  
  rating: Rating;
  "episode-title-podcast": number;
  "body-text": string;
  "link-3-text-podcast": string;
  "link-2-text-podcast": string;
  "link-1-text-podcast": string;
  "hook-title-podcast": string;
  "episode-number-podcast": string;
  "url-1-url-podcast": string;
  "pro-group-is-this-the-best-related-product-podcast": Boolean;
  "release-date": string;
  "url-3-text-podcast": string;
  "url-2-text-podcast": string;
  "mp3-url-podcast": string;
  "choose-director-video-producer-podcast-or-author-blog-for-the-item" : People;
  slug: string;
}

export interface VideoField {
  metadata: Metadata;
  url: string;
}

export interface ImageField {
  fileId: string;
  url: string;
  alt: string;
}

const enum Category {
  Electronics = 'electronics',
  Jewelery = 'jewelery',
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

interface Rating {
  rate: number;
  count: number;
}
