import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewData } from "../App/Features/UserReducer";

const Manage_user = () => {
	const { alluser, singleuser } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(viewData());
	}, []);

	return (
		<div className="container " style={{ height: "60vh" }}>
			<table class="table table-bordered">
				<thead>
					<tr>
						<th>Name</th>
						<th>Username</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{alluser.map((value, index) => (
						<tr>
							<td>{value.name}</td>
							<td>{value.username}</td>
							<td>{value.email}</td>						
						</tr>
					))}				
				</tbody>
			</table>
		</div>
	);
};

export default Manage_user;
