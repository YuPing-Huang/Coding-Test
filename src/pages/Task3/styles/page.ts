import styled from "styled-components";

const Title = styled.h3`
	text-decoration: underline;
`;

const SubTitle = styled.span`
	font-weight: bold;
`;

const NoteText = styled.span`
	/* color: red; */
	background-color: #ffffb8;
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	.inner {
		margin: 0 24px;
		text-align: center;
	}
	@media screen and (max-width: 1200px) {
		flex-direction: column;
		.inner {
			rotate: calc(90deg);
      height: 100px;
		}
    img {
      width: 450px;
    }
	}
`;

export { Title, SubTitle, NoteText, Container };
