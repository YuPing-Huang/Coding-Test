import type { ChangeEvent, ForwardedRef } from "react";
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Button, ButtonContainer, InnerContainer, OuterFrame, TextArea } from "~/pages/Task1/styles/page";

type AutoSizeTextareaHandle = {
	resizeTextArea: () => void;
};

type AutoSizeTextareaProps = {
	value: string;
	onChange?: (text: string) => void;
};

/** auto resize textarea component */
const AutoSizeTextarea = forwardRef(({ value, onChange }: AutoSizeTextareaProps, ref: ForwardedRef<AutoSizeTextareaHandle>): JSX.Element => {
	// refs
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	// methods
	const handleChange = useCallback(
		(event: ChangeEvent<HTMLTextAreaElement>): void => {
			if (onChange) onChange(event.target.value);
		},
		[onChange]
	);

	const resizeTextArea = useCallback(() => {
		if (textareaRef.current) {
			// Reset the height to auto to shrink if content is removed
			textareaRef.current.style.height = "auto";
			// Set the height based on the scrollHeight to fit the content
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
		}
	}, []);

	// effects
	useEffect(() => {
		resizeTextArea();
	}, [value, resizeTextArea]);

	// handle
	useImperativeHandle(
		ref,
		() => ({
			resizeTextArea,
		}),
		[resizeTextArea]
	);

	return (
		<TextArea
			ref={textareaRef}
			value={value}
			onChange={(e) => {
				handleChange(e);
			}}
			placeholder="Type in here now..."
		/>
	);
});

/**
 * Task 1: Coding assignment 1
 * -   Outer frame: Width 400px, no height limit, with border "1px solid red".
 * -   Inner element: 2 buttons, 1 text field, you can arrange them as you like.
 * -   Text field: Non-editable as normal, just like `<p></p>` or any block element, and can be edited after clicking button 1.
 * -   Button 1: With the text "edit", when the user clicks it, text field will toggle between non-editable and editable modes.
 * -   Button 2: With the text "resize", when the user clicks it, outer frame will toggle between 400px and 800px.
 * -   Expect: The buttons' size should be fixed, and the text field should automatically resize when the outer frame or inner text changes.
 * @returns
 */
function Task1Page(): JSX.Element {
	// refs
	const textareaRef = useRef<AutoSizeTextareaHandle | null>(null);
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

	useEffect(() => {
		textareaRef.current?.resizeTextArea();
	}, [isExpand]);

	return (
		<OuterFrame $isExpand={isExpand}>
			<InnerContainer>
				{isEditable ? (
					<AutoSizeTextarea
						value={text}
						ref={textareaRef}
						onChange={(content) => {
							setText(content);
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
