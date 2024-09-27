import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';

const BookMarks = ({bookmarks,readTime}) => {
  return (
    <div>
      <div className='bg-purple-200 border border-purple-400 rounded-lg p-2 mb-3'>
        <h5 className='text-center text-xl font-semibold text-purple-500'>Spent time on read : {readTime} min</h5>
      </div>
      <div className='bg-slate-100 p-4 rounded-lg'>
      <h4 className='text-xl font-semibold mb-3'>Bookmarked Blogs : {bookmarks.length}</h4>
      <div>
        {
          bookmarks.map(item =>(
           <div key={item.id} className='bg-white p-3 mb-3 rounded-lg'>
             <BookMark bookmarks={item} />
           </div>
          ) )
        }
      </div>
    </div>
    </div>
  );
};

BookMarks.propTypes = {
  bookmarks: PropTypes.object,
  readTime: PropTypes.number
}

export default BookMarks;