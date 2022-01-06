import { faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Footer from '../../../../components/shared/Footer/Footer';
import Header from '../../../../components/shared/Header/Header';
import useAuth from '../../../../hooks/useAuth';
import useBlogs from '../../../../hooks/useBlogs';
import './singleBlogDetails.css';


const SingleBlogDetails = () => {
   const { id } = useParams();
   const idNum = parseInt(id)
   const { blogsData } = useBlogs();
   const blogItem = blogsData.find(blog => blog.id === idNum);
   const { register, handleSubmit } = useForm();
   const { user } = useAuth();
   // console.log(blogItem);

   // submit form
   const onSubmit = data => {
      console.log(data);
   };
   return (
      <>
         <Header></Header>
         <div className="single_blog_details">
            <div className="container">
               <div className="row">
                  <div className="col-lg-10 mx-auto">

                     <div className="mb-4 d-flex align-items-center justify-content-between" data-aos="fade-up">
                        <div>
                           <h2>{blogItem.title}</h2>
                        </div>
                        <div>
                           <div className="name_comments d-flex align-items-center mb-3">
                              <div className="name">
                                 <FontAwesomeIcon className="user_icon me-2" icon={faUser} />
                                 <span className='blog_name'>{blogItem.blogerName}</span>
                              </div>
                              <div className="comments">
                                 <FontAwesomeIcon className="comments_icon me-2 ms-4" icon={faCalendar} />
                                 <span className='blog_comments'>Comments</span>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div>
                        <div className="single_blog_img">
                           <img src={blogItem.img} alt="" />
                        </div>

                        <p className='blog_shortDesc my-3'>
                           {blogItem.shortDesc}</p>

                        <div className="un_order_list mb-4">
                           <p className='list_title'>{blogItem.unOrderdListTitle}</p>
                           <ul className='p-0'>
                              <li className='mb-2'>1. {blogItem.unOrderItem_1}</li>
                              <li className='mb-2'>2. {blogItem.unOrderItem_2}</li>
                              <li className='mb-2'>3. {blogItem.unOrderItem_3}</li>
                              <li className='mb-2'>4. {blogItem.unOrderItem_4}</li>
                           </ul>
                        </div>

                        <div className="order_list">
                           <p className='list_title'>{blogItem.orderListTitle}</p>
                           <ol className='p-0'>
                              <li className='mb-2'>1. {blogItem.orderList_1}</li>
                              <li className='mb-2'>2. {blogItem.orderList_2}</li>
                              <li className='mb-2'>3. {blogItem.orderList_3}</li>
                              <li className='mb-2'>4. {blogItem.orderList_4}</li>
                           </ol>
                        </div>

                        <div className="comments_form mt-5">
                           <h4 className='mb-3'>Leave a comments</h4>
                           <form onSubmit={handleSubmit(onSubmit)}>
                              <div className="row">
                                 <div className="col-lg-6">
                                    <input defaultValue={user?.displayName} {...register("name")} 
                                    required placeholder="Name" />
                                 </div>
                                 <div className="col-lg-6">
                                    <input defaultValue={user?.email} {...register("email")} 
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