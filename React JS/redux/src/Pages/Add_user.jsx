import React from "react";

const Add_user = () => {
	return (
		<div className="container" style={{height:"60vh"}}>
			<form action="/action_page.php">
				<div className="mb-3 mt-3">
					<label htmlFor="email" className="form-label">
						Name:
					</label>
					<input
						type="text"
						className="form-control"
						id="email"
						placeholder="Enter name"
						name="email"
					/>
				</div>
				<div className="mb-3 mt-3">
					<label htmlFor="email" className="form-label">
						Username:
					</label>
					<input
						type="text"
						className="form-control"
						id="email"
						placeholder="Enter username"
						name="email"
					/>
				</div>
				
				<div className="mb-3 mt-3">
					<label htmlFor="email" className="form-label">
						Email:
					</label>
					<input
						type="email"
						className="form-control"
						id="email"
						placeholder="Enter email"
						name="email"
					/>
				</div>
				
				
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Add_user;
