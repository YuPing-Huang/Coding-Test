import { Outlet, useNavigate } from "react-router-dom";
import { RouterPath } from "~/routes";

function Layout(): JSX.Element {
	const navigate = useNavigate();

	return (
		<div>
			<a
				href="#"
				onClick={() => {
					navigate(RouterPath.Task1);
				}}
			>
				Task 1
			</a>
			<a
				href="#"
				onClick={() => {
					navigate(RouterPath.Task2);
				}}
			>
				Task 2
			</a>
			<a
				href="#"
				onClick={() => {
					navigate(RouterPath.Task3);
				}}
			>
				Task 3
			</a>
			<Outlet />
		</div>
	);
}

export default Layout;
