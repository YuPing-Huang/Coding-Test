import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
`;

const Header = styled.div`
	height: 50px;
	background-color: #e5e5e5;
	display: flex;
	align-items: center;
	a {
		margin: 0 20px;
	}
	position: fixed;
	width: 100vw;
`;

const OutletWrapper = styled.main`
	display: flex;
	justify-content: center;
	padding-top: 70px;
`;

export { Wrapper, OutletWrapper, Header };
