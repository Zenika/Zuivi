import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlockConsultant = ({ consultant }) => {
    console.log(consultant);
  return (
    <Link to="/consultant" className="tracking">
        <div className="tracking__consultant tracking__consultant--urgent">Taaki</div>
        <div className="tracking__date tracking__date--urgent">16/07</div>
    </Link>
  );
};

BlockConsultant.propTypes = {
  consultant: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastMeeting: PropTypes.number.isRequired
  }
  ).isRequired,
};

export default BlockConsultant;