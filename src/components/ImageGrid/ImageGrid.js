import React, { Component } from "react";
import { connect } from "react-redux";
import { loadImages } from "../../actions";
import Button from "../Button";
import Profile from "../Profile";
import Stats from "../Stats";
import "./style.css";

class ImageGrid extends Component {
	componentDidMount() {
		this.props.loadImages();
	}

	render() {
		const { images, error, isLoading, loadImages, imageStats } = this.props;

		return (
			<div className="content">
				<section className="grid">
					{images.map((image) => {
						return (
							<div
								key={image.id + Math.random()}
								className={`item item-${Math.ceil(
									image.height / image.width
								)}`}
							>
								<Profile
									details={{
										image_url:
											image.user.profile_image.small,
										profile_url: image.user.links.html,
									}}
								/>

								<Stats
									stats={imageStats[image.id]}
									download={image.links.download}
								/>
								<img
									src={image.urls.small}
									alt={image.alt_description}
								/>
							</div>
						);
					})}
				</section>
				{error && <div className="error mb-5">{error}</div>}
				<div>
					<Button onClick={() => !isLoading && loadImages()}>
						Load Images
					</Button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({
	isLoading,
	images,
	error,
	nextPage,
	imageStats,
}) => ({
	isLoading,
	images,
	error,
	nextPage,
	imageStats,
});

const mapDispatchToProps = (dispatch) => ({
	loadImages: () => dispatch(loadImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
