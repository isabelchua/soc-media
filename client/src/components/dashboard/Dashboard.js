import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import Spinner from "../layout/Spinner";

import { Link } from "react-router-dom";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";

const Dashboard = ({
	getCurrentProfile,
	auth: { user },
	profile: { profile, loading },
	deleteAccount
}) => {
	useEffect(() => {
		getCurrentProfile();
	}, [getCurrentProfile]);

	return loading && profile === null ? (
		<Spinner />
	) : (
		<>
			<h1 className="large text-primary">Dashboard</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Welcome {user && user.name}
			</p>{" "}
			{profile !== null ? (
				<>
					<DashboardActions />
					<Experience experience={profile.experience} />
					<Education education={profile.education} />

					<div className="my-2">
						<button
							className="btn btn-danger"
							onClick={() => deleteAccount()}
						>
							<i className="fas fa-user-minus">Delete My Account</i>
						</button>
					</div>

					<Link to="/create-profile" className="btn btn-primary m-1">
						Create Profile
					</Link>
				</>
			) : (
				<>
					You have not yet setup profile, please add some info
					<Link to="/create-profile" className="btn btn-primary m-1">
						Create Profile
					</Link>
				</>
			)}
		</>
	);
};

const mapStateToProps = state => ({
	auth: state.auth,
	profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
	Dashboard
);
