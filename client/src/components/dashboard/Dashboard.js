import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import userEvent from "@testing-library/user-event";
import { Link } from "react-router-dom";
import DashboardActions from "./DashboardActions";

const Dashboard = ({
	getCurrentProfile,
	auth: { user },
	profile: { profile, loading }
}) => {
	useEffect(() => {
		getCurrentProfile();
	}, []);

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

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
