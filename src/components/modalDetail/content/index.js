import { useSelector } from 'react-redux';
import './styles.css';

const Content = () => {
  const contentViewed = useSelector((state) => state.contentViewed);
  return (
    <div className="modal-content-container">
      <figure>
        <img src={contentViewed?.image} alt={contentViewed?.name} className="modal-img" />
      </figure>
      <div>
        <h2> {contentViewed.name}</h2>
        {contentViewed.description.map((el, index) => (
          <p key={`${el}${index}`} className="modal-description-item">
            {el}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Content;
