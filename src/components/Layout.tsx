import { Link, Outlet } from "react-router-dom";
import { RouterPath } from "~/routes";
import { Wrapper, Header, OutletWrapper } from "~/components/styles/layout";

/**
 * Layout Component
 * @returns
 */
function Layout(): JSX.Element {
	return (
		<Wrapper>
			<Header>
				<div>
					<Link to={RouterPath.Task1}>Task 1</Link>
					<Link to={RouterPath.Task2}>Task 2</Link>
					<Link to={RouterPath.Task3}>Task 3</Link>
				</div>
			</Header>
			<OutletWrapper>
				<Outlet />
			</OutletWrapper>
		</Wrapper>
	);
}

export default Layout;
