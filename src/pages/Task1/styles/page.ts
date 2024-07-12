import styled from '@emotion/styled'

type OuterFrameProps = {
	$isExpand: boolean;
};

const OuterFrame = styled.div<OuterFrameProps>`
	width: ${(props): string => (props.$isExpand ? "800px" : "400px")};
	border: 1px solid red;
	transition: width 0.5s;
	padding: 16px;
`;

const InnerContainer = styled.div`
	display: flex;
	width: 100%;
	gap: 8px;
	& p {
		flex-grow: 1;
		margin: 5px 5px 4px 5px;
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

const Button = styled.button`
	padding: 12px 16px;
	margin: 0;
`;

export { OuterFrame, InnerContainer, Button, ButtonContainer };
