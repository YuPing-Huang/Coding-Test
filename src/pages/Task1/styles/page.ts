import styled from "styled-components";

type OuterFrameProps = {
	$isExpand: boolean;
};

const OuterFrame = styled.div<OuterFrameProps>`
	width: ${(props): string => (props.$isExpand ? "800px" : "400px")};
	border: 1px solid red;
	padding: 16px;
`;

const InnerContainer = styled.div`
	width: 100%;
	display: flex;
	gap: 8px;
	& p {
		flex-grow: 1;
		margin: 5px;
		overflow-wrap: anywhere;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	flex-shrink: 0;
`;

const TextArea = styled.textarea`
	flex-grow: 1;
	box-sizing: border-box;
	overflow: hidden;
	resize: none;
	display: inline-block;
	align-self: baseline;
	padding: 5px;
`;

const Button = styled.button`
	padding: 0 16px;
	height: 45px;
	margin: 0;
`;

export { OuterFrame, InnerContainer, Button, TextArea, ButtonContainer };
