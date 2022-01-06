import blog_1 from '../img/blog_1.png';
import blog_2 from '../img/blog_2.png';
import blog_3 from '../img/blog_3.png';


const useBlogs = () => {

    const blogsData = [
        {
           id:1,
           img:blog_1,
           date:'28 january 2021',
           title:'UPON OF SEASONS EARTH',
           blogerName:'By Naim Ahmed',
           shortDesc:"Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!",
           unOrderdListTitle:'Sample Unordered List',
           unOrderItem_1:'Comodous in tempor ullamcorper miaculis',
           unOrderItem_2:'Pellentesque vitae neque mollis urna mattis laoreet.',
           unOrderItem_3:'Divamus sit amet purus justo',
           unOrderItem_4:'Proin molestie egestas orci ac suscipit risus posuere loremou.',
           orderListTitle:'Sample Ordered List',
           orderList_1:'Comodous in tempor ullamcorper miaculis',
           orderList_2:'Pellentesque vitae neque mollis urna mattis laoreet.',
           orderList_3:'Divamus sit amet purus justo.',
           orderList_4:'Proin molestie egestas orci ac suscipit risus posuere loremous',
           sampleParagraphText:"Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summe!",
        },
        {
           id:2,
           img:blog_2,
           date:'9 May 2021',
           title:'CHRISTMAS SALE IS HERE 7',
           blogerName:'By Mamun Ahmed',
           shortDesc:"Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!",
           unOrderdListTitle:'Sample Unordered List',
           unOrderItem_1:'Comodous in tempor ullamcorper miaculis',
           unOrderItem_2:'Pellentesque vitae neque mollis urna mattis laoreet.',
           unOrderItem_3:'Divamus sit amet purus justo',
           unOrderItem_4:'Proin molestie egestas orci ac suscipit risus posuere loremou.',
           orderListTitle:'Sample Ordered List',
           orderList_1:'Comodous in tempor ullamcorper miaculis',
           orderList_2:'Pellentesque vitae neque mollis urna mattis laoreet.',
           orderList_3:'Divamus sit amet purus justo.',
           orderList_4:'Proin molestie egestas orci ac suscipit risus posuere loremous',
           sampleParagraphText:"Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summe!",
        },
        {
           id:3,
           img:blog_3,
           date:'5 April 2021',
           title:'This is Third Post For XipBlog',
           blogerName:'By Korim Ali',
           shortDesc:"Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!",
           unOrderdListTitle:'Sample Unordered List',
           unOrderItem_1:'Comodous in tempor ullamcorper miaculis',
           unOrderItem_2:'Pellentesque vitae neque mollis urna mattis laoreet.',
           unOrderItem_3:'Divamus sit amet purus justo',
           unOrderItem_4:'Proin molestie egestas orci ac suscipit risus posuere loremou.',
           orderListTitle:'Sample Ordered List',
           orderList_1:'Comodous in tempor ullamcorper miaculis',
           orderList_2:'Pellentesque vitae neque mollis urna mattis laoreet.',
           orderList_3:'Divamus sit amet purus justo.',
           orderList_4:'Proin molestie egestas orci ac suscipit risus posuere loremous',
           sampleParagraphText:"Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summe!",
        },
     ]

     return {
         blogsData,
     }
}

export default useBlogs;