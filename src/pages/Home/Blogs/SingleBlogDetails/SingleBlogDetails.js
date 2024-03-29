import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Footer from '../../../../components/shared/Footer/Footer';
import Header from '../../../../components/shared/Header/Header';
// import useAuth from '../../../../hooks/useAuth';
import useBlogs from '../../../../hooks/useBlogs';
import './singleBlogDetails.css';


const SingleBlogDetails = () => {
   const { id } = useParams();
   const idNum = parseInt(id)
   const { blogsData } = useBlogs();
   const blogItem = blogsData.find(blog => blog.id === idNum);
   const { register, handleSubmit,reset } = useForm();
   // const { user } = useAuth();
   const [showComment, setShowComment] = useState([]);
   const [loading,setLoading] = useState(false);
   // console.log(blogItem);

   useEffect(() => {
      fetch(`https://vast-everglades-73646.herokuapp.com/blogPost/${blogItem.title}`)
         .then(res => res.json())
         .then(data => {
            setShowComment(data);
            // console.log(data);
            setLoading(false);
         })

   }, [blogItem.title,loading])

   // submit form
   const onSubmit = data => {
      data.blogTitle = blogItem.title
      data.date = new Date();
      // console.log(data);
      fetch('https://vast-everglades-73646.herokuapp.com/blogPost', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(data)
      })
         .then(res => res.json())
         .then(data => {
            if(data.acknowledged){
              setLoading(true)
            }
            reset();
         })
   };

  

   return (
      <>
         <Header></Header>
         <div className="single_blog_details">
            <div className="container">
               <div className="row">
                  <div className="col-lg-10 mx-auto">

                     <div className="mb-4 d-flex align-items-center justify-content-between single_blog_header" data-aos="fade-up">
                        <div>
                           <h2>{blogItem.title}</h2>
                        </div>
                        <div>
                           <div className="name_comments d-flex align-items-center mb-3">
                              <div className="name">
                                 <FontAwesomeIcon className="user_icon me-2" icon={faUser} />
                                 {/* <span className='blog_name'>{blogItem.blogerName}</span> */}
                                <span className='blog_name'>{blogItem.blogerName}</span>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div>
                        <div className="single_blog_img"  data-aos="fade-up">
                           <img src={blogItem.img} alt="" />
                        </div>

                        <p className='blog_shortDesc my-3'  data-aos="fade-up">
                           {blogItem.shortDesc}</p>

                        <div className="un_order_list mb-4"  data-aos="fade-up">
                           <p className='list_title'>{blogItem.unOrderdListTitle}</p>
                           <ul className='p-0'>
                              <li className='mb-2'>1. {blogItem.unOrderItem_1}</li>
                              <li className='mb-2'>2. {blogItem.unOrderItem_2}</li>
                              <li className='mb-2'>3. {blogItem.unOrderItem_3}</li>
                              <li className='mb-2'>4. {blogItem.unOrderItem_4}</li>
                           </ul>
                        </div>

                        <div className="order_list"  data-aos="fade-up">
                           <p className='list_title'>{blogItem.orderListTitle}</p>
                           <ol className='p-0'>
                              <li className='mb-2'>1. {blogItem.orderList_1}</li>
                              <li className='mb-2'>2. {blogItem.orderList_2}</li>
                              <li className='mb-2'>3. {blogItem.orderList_3}</li>
                              <li className='mb-2'>4. {blogItem.orderList_4}</li>
                           </ol>
                        </div>
                           <h5  data-aos="fade-up">{showComment?.length} Comments</h5>
                           {
                              showComment.map(comment => <div className='d-flex mb-4 mt-5'  data-aos="fade-up">
                                 <div className="user_comments_icon">
                                    <FontAwesomeIcon className="me-2 ms-4" icon={faUser} />
                                 </div>
                                 <div>
                                    <h5>{comment?.name}</h5>
                                    <p>{new Date(comment?.date).toDateString()}</p>
                                    <p>{comment?.comment}</p>
                                 </div>
                              </div>)
                           }
           

                        <div className="comments_form mt-5"  data-aos="fade-up">
                           <h4 className='mb-3'>Leave a comments</h4>
                           <form onSubmit={handleSubmit(onSubmit)}>
                              <div className="row">
                                 <div className="col-lg-6">
                                    <input {...register("name")}
                                       required placeholder="Name" />
                                 </div>
                                 <div className="col-lg-6">
                                    <input {...register("email")}
                                       required placeholder="Email" />
                                 </div>
                              </div>
                              <textarea rows="5" {...register("comment")} required placeholder="Comment" />
                              <input className='mt-3 comment_submit_btn' type="submit" value="Post" />
                           </form>
                        </div>

                     </div>

                  </div>
               </div>
            </div>
         </div>

         <Footer></Footer>
      </>
   );
};

export default SingleBlogDetails;