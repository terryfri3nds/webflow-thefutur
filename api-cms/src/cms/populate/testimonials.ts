import type { CMSList } from '../../types/CMSList';
import type { Product, Testimonial } from './types';

/**
 * Populate CMS Data from an external API.
 */
 window.fsAttributes = window.fsAttributes || [];
 window.fsAttributes.push([
   'cmsload',
   async (listInstances: CMSList[]) => {
    console.log("listInstances", listInstances)
    Promise.all([
                  loadTestimonials("testimonials-wrap_1", listInstances, 1),
                  loadTestimonials("testimonials-wrap_2", listInstances, 20)
              ])
  
   },
 ]);


async function loadTestimonials(wrapper: String, listInstances: CMSList[], limit: Number, offset = 0)
{
   // Get the list instance
   const [ list ] = listInstances.filter(s => s != null && s.list != null && s.wrapper.className.includes(wrapper));
   console.log("list", list)
   // Save a copy of the template
   const [firstItem] = list.items;
   const itemTemplateElement = firstItem.element;

   // Fetch external data
   var payload = JSON.stringify({
      "query": {
        "_archived": false,
        "_draft": false
      },
      "sort":[
        "-published-on"
      ]
   });
   const testimonials = await fetchTestimonials(wrapper, payload, limit, offset);
   console.log("testimonials", testimonials)

   // Remove existing items
   list.clearItems();

   // Create the new items
   const newItems = testimonials.map((item) => createTestimonialItem(item, itemTemplateElement));

   // Populate the list
   list.addItems(newItems).then(function(){
     const wrapperShow = document.getElementsByClassName(wrapper) as HTMLCollection | null;
    
     const loadingHidden = document.getElementsByClassName('loading-' + wrapper) as HTMLCollection | null;
     console.log('loading-', loadingHidden)
     if (loadingHidden.length > 0) {
      loadingHidden[0].classList.add('hidden');
     }
     if (wrapperShow != null) {
      wrapperShow[0].classList.remove('hidden');
     }
     //Webflow.require('ix2').init() //---> reinicializa la interaccion
   });
}

/**
 * Fetches courses from webflow cms API.
 * @returns An array of {@link Product}.
 */
const fetchTestimonials = async (list: String, payload : String, limit: Number, offset: Number) => {
  try 
  {
    const headers = new Headers ({ 
      'Content-Type': 'application/json' , 
      "token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NDE0NjU5OTAsImV4cCI6MTY3MzAwMTk5MCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.Ak4VZ-YdIxtHVqDuZ7iRHbyR-L6C64n6W7fKCfVEi-8" 
    });
    
  
    var requestOptions = {
      method: "POST",
      headers,
      body: payload
    };

    var collectionId = "63bddef3b4cbe65f4aeb6e6e";
    var endpoint = 'https://w-api-cms.onrender.com/api/' + list + '/' + collectionId +'/items';

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
   
    const data: Testimonial[] = json["data"];
   
    return data;

  } catch (error) {
    return [];
  }
};


/**
 * Creates an item from the template element.
 * @param Testimonial The Testimonials data to create the item from.
 * @param templateElement The template element.
 *
 * @returns A new Collection Item element.
 */
const createTestimonialItem = (item: Testimonial, templateElement: HTMLDivElement) => {
  // Clone the template element
  const newItem = templateElement.cloneNode(true) as HTMLDivElement;

  
  // Query inner elements
  const title = newItem.querySelector<HTMLHeadingElement>('[data-element="name"]');
  const testimonial = newItem.querySelector<HTMLParagraphElement>('[data-element="testimonial"]');
  const author = newItem.querySelector<HTMLParagraphElement>('[data-element="author"]');
  const masterMindTestimonial = newItem.querySelector<HTMLParagraphElement>('[data-element="master-mind-testimonial"]');
  const url = newItem.querySelector<HTMLAnchorElement>('[data-element="url"]');

  
  if (title) title.textContent = "";
  if (testimonial) testimonial.textContent = "";
  if (author) author.textContent = "";
  if (masterMindTestimonial) masterMindTestimonial.textContent = "";
  if (url) url.href = "";

  // Populate inner elements
  if (title) title.textContent = item.name;
  if (testimonial) testimonial.textContent = item.testimonial;
  if (author && item['person-reference'] != undefined) author.textContent =  item['person-reference'].name;
  if (masterMindTestimonial) masterMindTestimonial.textContent = item['master-mind-testimonial'];
  if (url) url.href = "/testimonials/" + item.slug;

  return newItem;
};

