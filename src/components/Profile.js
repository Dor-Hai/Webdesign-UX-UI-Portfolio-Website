import './Profile.css';
import avatar from '../images/avatar.png';

export default function Profile() {
  return (
    <div className="profile flex-container">
        <div className="row">
           <img src={avatar} alt="Dor Hai" />
        </div>
        <div className="row">
            <p className="name">Dor Hai</p>
            <p className="desc">UX/UI Designer & Frontend Web Developer</p>
        </div>
    </div>
  )
}
