import PropTypes from 'prop-types';
import { BiBookmark } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const BlogItem = ({ blog, handleAddBookmark,handleReadTime }) => {
  const {id,cover,title,author,author_img,posted_date,reading_time,hashtags} = blog;

  return (
    <div className='pb-10'>
      <img src={cover} alt={title} className='rounded' />
      <div className="flex items-center justify-between">
        <div className="flex items-center py-4">
          <img src={author_img} alt={author} className='w-14 h-14 object-contain rounded me-3' />
          <div>
            <p className='text-xl font-semibold text-slate-900'>{author}</p>
            <p className='text-base text-slate-600'>{posted_date}</p>
          </div>
        </div>
        <div className='flex items-center'>
          <p className='text-base text-slate-600 me-1'>{reading_time} min read</p>
          <button onClick={() => handleAddBookmark(blog)}><BiBookmark className='text-base text-slate-600' /></button>
        </div>
      </div>
      <h2 className='text-3xl py-2'>{title}</h2>
      <div>
        {hashtags.map((has,id) => <Link key={id} to="#" className='me-2 text-slate-600 text-base'>#{has}</Link>)}
      </div>
      <button onClick={() => handleReadTime(id,reading_time)} className='text-base text-purple-700 underline mt-2'>Mark As Read</button>
    </div>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.object,
  handleAddBookmark: PropTypes.func,
  handleReadTime: PropTypes.func
}

export default BlogItem;