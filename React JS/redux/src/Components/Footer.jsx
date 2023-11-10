import React from "react";

const Footer = () => {
	return (
		<div>
			{/* Remove the container if you want to extend the Footer to full width. */}
			<div className=" my-5">
				<footer
					className="text-center text-lg-start"
					style={{ backgroundColor: "lightblue" }}
				>
					<div className="container d-flex justify-content-center py-5">
						<button
							type="button"
							className="btn btn-primary btn-lg btn-floating mx-2"
							style={{ backgroundColor: "#54456b" }}
						>
							<i className="fa fa-facebook-f" />
						</button>
						<button
							type="button"
							className="btn btn-primary btn-lg btn-floating mx-2"
							style={{ backgroundColor: "#54456b" }}
						>
							<i className="fa fa-youtube" />
						</button>
						<button
							type="button"
							className="btn btn-primary btn-lg btn-floating mx-2"
							style={{ backgroundColor: "#54456b" }}
						>
							<i className="fa fa-instagram" />
						</button>
						<button
							type="button"
							className="btn btn-primary btn-lg btn-floating mx-2"
							style={{ backgroundColor: "#54456b" }}
						>
							<i className="fa fa-twitter" />
						</button>
					</div>
					{/* Copyright */}
					<div
						className="text-center text-white p-3"
						style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
					>
						© 2020 Copyright:
						<a className="text-white" href="https://mdbootstrap.com/">
							MDBootstrap.com
						</a>
					</div>
					{/* Copyright */}
				</footer>
			</div>
			{/* End of .container */}
		</div>
	);
};

export default Footer;
