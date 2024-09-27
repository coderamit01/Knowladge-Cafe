import PropTypes from 'prop-types';

const BookMark = ({bookmarks}) => {
  const {title} = bookmarks;
  return (
    <>
      <h5 className='text-base font-semibold'>{title}</h5>
    </>
  );
};

BookMark.propTypes = {
  bookmarks: PropTypes.object
}

export default BookMark;