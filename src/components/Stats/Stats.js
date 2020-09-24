import React from "react";
import "./style.css";

const Stats = ({ stats, download }) => {
	if (!stats) {
		return <span className="stats">Loading...</span>;
	}

	return (
		<div className="wrapper">
			<a
				href={download}
				rel="nofollow noopener noreferrer"
				download=""
				target="_blank"
			>
				<span role="img" aria-label="download" className="download">
					📥
				</span>
			</a>
			<span className="stats">
				{stats.error && "🤯 Error!"}
				{stats.isLoading && "🙄 Loading..."}
				{stats.downloads != null && `🤘 ${stats.downloads}`}
			</span>
		</div>
	);
};

export default Stats;
