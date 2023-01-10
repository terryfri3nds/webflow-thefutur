import type { CMSList } from '../../types/CMSList';
import type { Product } from './types';

/**
 * Populate CMS Data from an external API.
 */
 window.fsAttributes = window.fsAttributes || [];
 window.fsAttributes.push([
   'cmsload',
   async (listInstances: CMSList[]) => {
    console.log("listInstances", listInstances)
    Promise.all([loadCourses("courses-wrap_1", listInstances, 1),loadVideos(listInstances, 1),loadPodcast(listInstances, 1)])
    // await loadCourses(listInstances);
 
     //await loadVideos(listInstances);

     //await loadPodcast(listInstances);
     
 
     // Get the template filter
   /* const filterTemplateElement = filtersInstance.form.querySelector<HTMLLabelElement>('[data-element="filter"]');
     if (!filterTemplateElement) return;
 
     // Get the parent wrapper
     const filtersWrapper = filterTemplateElement.parentElement;
     if (!filtersWrapper) return;
 
     // Remove the template from the DOMß
     filterTemplateElement.remove();
 
     // Collect the categories
     const categories = collectCategories(products);
 
     // Create the new filters and append the to the parent wrapper
     for (const category of categories) {
       const newFilter = createFilter(category, filterTemplateElement);
       if (!newFilter) continue;
 
       filtersWrapper.append(newFilter);
     }
 
     // Sync the CMSFilters instance with the new created filters
     filtersInstance.storeFiltersData();
     */
   },
 ]);

/*
 window.fsAttributes.push([
  'cmsslider',
  async (listInstances: CMSList[]) => {
   console.log("listInstances", listInstances)
   Promise.all([loadVideos(listInstances)/*,loadPodcast(listInstances)/])
  },
]);
*/
async function loadCourses(wrapper: String, listInstances: CMSList[], limit: Number, offset = 0)
{
   // Get the list instance
   const [ listCourses ] = listInstances.filter(s => s != null && s.list != null && s.wrapper.className.includes(wrapper));
   console.log("loadCourses", listCourses)
   // Save a copy of the template
   const [firstItem] = listCourses.items;
   const itemTemplateElement = firstItem.element;

   // Fetch external data
   const courses = await fetchCourses(wrapper, limit, offset);
   console.log("courses", courses)

   // Remove existing items
   listCourses.clearItems();

   // Create the new items
   const newItems = courses.map((product) => createItem(product, itemTemplateElement));

   // Populate the list
   listCourses.addItems(newItems).then(function(){
     const coursesId = document.getElementsByClassName(wrapper) as HTMLCollection | null;
    
     const coursesLoadingId = document.getElementsByClassName('loading-' + wrapper) as HTMLCollection | null;
     console.log('loading-', coursesLoadingId)
     if (coursesLoadingId != null) {
       coursesLoadingId[0].classList.add('hidden');
     }
     if (coursesId != null) {
       coursesId[0].classList.remove('hidden');
     }
     //Webflow.require('ix2').init() //---> reinicializa la interaccion
   });
}


async function loadVideos(listInstances: CMSList[], limit: Number, offset = 0)
{
   // Get the list instance
   const [ listVideos ] = listInstances.filter(s => s != null && s.list != null && s.list.id == "videos-list");
   console.log("loadVideos", listVideos)
   console.log("listVideos.items", listVideos.items)
   // Save a copy of the template
   const [firstItem] = listVideos.items;
   const itemTemplateElement = firstItem.element;

   // Fetch external data
   const videos = await fetchVideos("video-list", limit, offset);
   console.log("videos", videos)

   // Remove existing items
   listVideos.clearItems();

   // Create the new items
   const newItems = videos.map((video) => createContentItem(video, itemTemplateElement));

   // Populate the list
   listVideos.addItems(newItems).then(function(){

     const coursesId = document.getElementById('coursesId') as HTMLElement | null;
     const coursesLoadingId = document.getElementById('coursesLoadingId') as HTMLElement | null;
     if (coursesLoadingId != null) {
       coursesLoadingId.classList.add('hidden');
     }
     if (coursesId != null) {
       coursesId.classList.remove('hidden');
     }

     slider1();
     //Webflow.require('ix2').init() //---> reinicializa la interaccion
   });
}


async function loadPodcast(listInstances: CMSList[], limit: Number, offset = 0)
{
   // Get the list instance
   const [ listVideos ] = listInstances.filter(s => s != null && s.list != null && s.list.id == "podcasts-list");
   console.log("loadPodcast", listVideos)
   // Save a copy of the template
   const [firstItem] = listVideos.items;
   const itemTemplateElement = firstItem.element;

   // Fetch external data
   const podcasts = await fetchPodcast("podcasts-list", limit, offset);
   console.log("podcasts", podcasts)

   // Remove existing items
   listVideos.clearItems();

   // Create the new items
   const newItems = podcasts.map((content) => createContentItem(content, itemTemplateElement));

   // Populate the list
   listVideos.addItems(newItems).then(function(){

     const coursesId = document.getElementById('coursesId') as HTMLElement | null;
     const coursesLoadingId = document.getElementById('coursesLoadingId') as HTMLElement | null;
     if (coursesLoadingId != null) {
       coursesLoadingId.classList.add('hidden');
     }
     if (coursesId != null) {
       coursesId.classList.remove('hidden');
     }
     //Webflow.require('ix2').init() //---> reinicializa la interaccion
   });
}






/**
 * Fetches courses from webflow cms API.
 * @returns An array of {@link Product}.
 */
const fetchCourses = async (list: String,limit: Number, offset: Number) => {
  try 
  {
    const headers = new Headers ({ 
      'Content-Type': 'application/json' , 
      "token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NDE0NjU5OTAsImV4cCI6MTY3MzAwMTk5MCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.Ak4VZ-YdIxtHVqDuZ7iRHbyR-L6C64n6W7fKCfVEi-8" 
    });
    
    var payload = JSON.stringify({
      "query": {
        "featured": true,
        "_archived": false,
        "_draft": false,
        "-name": ["Introduction to UX Design", "UX Fundamentals", "Business Bootcamp"] 
      },
      "sort":[
        "-published-n"
      ]
    });
    var requestOptions = {
      method: "POST",
      headers,
      body: payload
    };

    var endpoint = 'https://w-api-cms.onrender.com/api/' + list + '/637d45fe861d643e974f7e2c/items';

    if (limit != 0 || limit != undefined)
    {
      endpoint += "/limit/" + limit;
    }

    if (offset != 0 || offset != undefined)
    {
      endpoint += "/offset/" + offset;
    }

    const response = await fetch(endpoint, requestOptions);
   
    const json = await response.json();
   
    const data: Product[] = json["data"];
   
    return data;

  } catch (error) {
    return [];
  }
};

/**
 * Fetches courses from webflow cms API.
 * @returns An array of {@link Content}.
 */
 const fetchPodcast = async (list: String,limit: Number, offset: Number) => {
  try 
  {
    const headers = new Headers ({ 
      'Content-Type': 'application/json' , 
      "token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NDE0NjU5OTAsImV4cCI6MTY3MzAwMTk5MCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.Ak4VZ-YdIxtHVqDuZ7iRHbyR-L6C64n6W7fKCfVEi-8" 
    });
    
    var payload = JSON.stringify({
      "query": {
        "_archived": false,
        "_draft": false,
        "type-of-content": "20f8728e97dc879b0ded15ad14c1bb74"
      },
      "sort":[
        "-release-date"
      ]
    });
    var requestOptions = {
      method: "POST",
      headers,
      body: payload
    };

    var endpoint = 'https://w-api-cms.onrender.com/api/' + list + '/637d45fe861637d45fe861d641e554f7f2bd643e974f7e2c/items';

    if (limit != 0 || limit != undefined)
    {
      endpoint += "/limit/" + limit;
    }

    if (offset != 0 || offset != undefined)
    {
      endpoint += "/offset/" + offset;
    }

    const response = await fetch(endpoint, requestOptions);

    const json = await response.json();
   
    const data: Content[] = json["data"];
   
    return data;

  } catch (error) {
    return [];
  }
};

/**
 * Fetches videos from webflow cms API
 * @returns An array of {@link Content}.
 */
 const fetchVideos = async (list: String,limit: Number, offset: Number) => {
  try 
  {
    const headers = new Headers ({ 
      'Content-Type': 'application/json' , 
      "token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NDE0NjU5OTAsImV4cCI6MTY3MzAwMTk5MCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.Ak4VZ-YdIxtHVqDuZ7iRHbyR-L6C64n6W7fKCfVEi-8" 
    });
    
    var payload = JSON.stringify({
      "query": {
        "_archived": false,
        "_draft": false,
        "tags": ["637d45fe861d6402274f8bda"],
        "type-of-content": "ab5fdd205d97947450a63f18343c374c"
      },
      "sort":[
        "-created-on"
      ]
    });
    var requestOptions = {
      method: "POST",
      headers,
      body: payload
    };


    var endpoint = 'https://w-api-cms.onrender.com/api/' + list + '/637d45fe861d641e554f7f2b/items';

    if (limit != 0 || limit != undefined)
    {
      endpoint += "/limit/" + limit;
    }

    if (offset != 0 || offset != undefined)
    {
      endpoint += "/offset/" + offset;
    }

    const response = await fetch(endpoint, requestOptions);
  
    const json = await response.json();
   console.log("json", json)
    const data: Content[] = json["data"];
   
    return data;

  } catch (error) {
    return [];
  }
};

/**
 * Creates an item from the template element.
 * @param product The product data to create the item from.
 * @param templateElement The template element.
 *
 * @returns A new Collection Item element.
 */
const createItem = (product: Product, templateElement: HTMLDivElement) => {
  // Clone the template element
  const newItem = templateElement.cloneNode(true) as HTMLDivElement;

  
  // Query inner elements
  const image = newItem.querySelector<HTMLImageElement>('[data-element="image"]');
  const title = newItem.querySelector<HTMLHeadingElement>('[data-element="title"]');
  const price = newItem.querySelector<HTMLParagraphElement>('[data-element="price"]');
  const author = newItem.querySelector<HTMLParagraphElement>('[data-element="author"]');
  const description = newItem.querySelector<HTMLParagraphElement>('[data-element="description"]');
  const url = newItem.querySelector<HTMLAnchorElement>('[data-element="url"]');

  
  if (image) image.src = "";
  if (title) title.textContent = "";
  if (price) price.textContent = "";
  if (author) author.textContent = "";
  if (description) description.textContent = "";
  if (url) url.href = "";

  // Populate inner elements
  if (image && product['thumbnail-square'] != undefined) image.src = product['thumbnail-square'].url;
  if (title) title.textContent = product.name;
  if (price) price.textContent = product.price;
  if (author) author.textContent = product.instructor.name;
  if (description) description.textContent = product['short-description'];
  if (url) url.href = "/course/" + product.slug;

  return newItem;
};

/**
 * Creates an item from the template element.
 * @param product The product data to create the item from.
 * @param templateElement The template element.
 *
 * @returns A new Collection Item element.
 */
 const createContentItem = (content: Content, templateElement: HTMLDivElement) => {
  // Clone the template element
  const newItem = templateElement.cloneNode(true) as HTMLDivElement;

  
  // Query inner elements
  const image = newItem.querySelector<HTMLImageElement>('[data-element="image"]');
  const title = newItem.querySelector<HTMLHeadingElement>('[data-element="title"]');
  const author = newItem.querySelector<HTMLParagraphElement>('[data-element="author"]');
  const episode_title_podcast = newItem.querySelector<HTMLParagraphElement>('[data-element="episode-title-podcast"]');
  const url = newItem.querySelector<HTMLAnchorElement>('[data-element="url"]');

  // Populate inner elements
  if (image) image.src = "";
  if (episode_title_podcast) episode_title_podcast.textContent = "";
  if (title) title.textContent = "";
  if (author) author.textContent = "";
  if (url) url.href = "";

  if (image && content['thumbnail'] != undefined) image.src = content['thumbnail'].url;
  if (title) title.textContent = content.name;
  if (episode_title_podcast && content['episode-title-podcast'] != undefined) episode_title_podcast.textContent = content["episode-title-podcast"];
  if (author && content['choose-director-video-producer-podcast-or-author-blog-for-the-item'] != undefined) author.textContent = content["choose-director-video-producer-podcast-or-author-blog-for-the-item"].name;
  if (url) url.href = "/content/" + content.slug;

  //if (price) price.textContent = product.price;
  //if (author) author.textContent = product.author;
  //if (description) description.textContent = product['short-description'];

  return newItem;
};

/**
 * Collects all the categories from the products' data.
 * @param products The products' data.
 *
 * @returns An array of {@link Product} categories.
 */
const collectCategories = (products: Product[]) => {
  const categories: Set<Product['category']> = new Set();

  for (const { category } of products) {
    categories.add(category);
  }

  return [...categories];
};

/**
 * Creates a new radio filter from the template element.
 * @param category The filter value.
 * @param templateElement The template element.
 *
 * @returns A new category radio filter.
 */
const createFilter = (category: Product['category'], templateElement: HTMLLabelElement) => {
  // Clone the template element
  const newFilter = templateElement.cloneNode(true) as HTMLLabelElement;

  // Query inner elements
  const label = newFilter.querySelector('span');
  const radio = newFilter.querySelector('input');

  if (!label || !radio) return;

  // Populate inner elements
  label.textContent = category;
  radio.value = category;

  return newFilter;
};
