import type { ChangeEvent } from "react";
import { useCallback, useState } from "react";
import { Button, ButtonContainer, InnerContainer, OuterFrame } from "~/pages/Task1/styles/page";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

/**
 * Task 1: Coding assignment 1
 * -   Outer frame: Width 400px, no height limit, with border "1px solid red".
 * -   Inner element: 2 buttons, 1 text field, you can arrange them as you like.
 * -   Text field: Non-editable as normal, just like `<p></p>` or any block element, and can be edited after clicking button 1.
 * -   Button 1: With the text "edit", when the user clicks it, text field will toggle between non-editable and editable modes.
 * -   Button 2: With the text "resize", when the user clicks it, outer frame will toggle between 400px and 800px.
 * Expect: The buttons' size should be fixed, and the text field should automatically resize when the outer frame or inner text changes.
 * @returns
 */
function Task1Page(): JSX.Element {
	// states
	const [isEditable, setIsEditable] = useState<boolean>(true);
	const [isExpand, setIsExpand] = useState<boolean>(false);
	const [text, setText] = useState<string>("");

	// Button 1
	const toggleEdit = useCallback((): void => {
		setIsEditable((prev) => !prev);
	}, []);

	// Button 2
	const toggleSize = useCallback((): void => {
		setIsExpand((prev) => !prev);
	}, []);

	// Input on change
	const handleChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>): void => {
		setText(event.target.value);
	}, []);

	return (
		<OuterFrame $isExpand={isExpand}>
			<InnerContainer>
				{isEditable ? (
					<TextareaAutosize
						placeholder="Type your text..."
						value={text}
						onChange={(e) => {
							handleChange(e);
						}}
						style={{
							flexGrow: 1,
							padding: 4,
							minHeight: 36.39,
						}}
					/>
				) : (
					<p>{text}</p>
				)}
				<ButtonContainer>
					<Button
						onClick={() => {
							toggleEdit();
						}}
					>
						Button 1
					</Button>
					<Button
						onClick={() => {
							toggleSize();
						}}
					>
						Button 2
					</Button>
				</ButtonContainer>
			</InnerContainer>
		</OuterFrame>
	);
}

export default Task1Page;
