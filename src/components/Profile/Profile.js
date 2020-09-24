import React from "react";
import "./style.css";

const Profile = ({ details }) => {
	return (
		<div className="profile">
			<a
				href={details.profile_url}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={details.image_url} alt="profile" />
			</a>
		</div>
	);
};

export default Profile;
