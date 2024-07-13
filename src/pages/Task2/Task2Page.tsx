import { useCallback, useRef, useState } from "react";

/**
 * Task 2
 * -   Now we have two buttons:
 * -   Button 1: With the text "start".
 * -   Button 2: With the text "end".
 * -   Expect: Click button 1 first, wait a few seconds, and then click button 2. The browser should display the time duration between these two click.
 * @returns
 */
function Task2Page(): JSX.Element {
	// refs
	const startTimeRef = useRef<Date | null>(null);
	const endTimeRef = useRef<Date | null>(null);

	// states
	const [duration, setDuration] = useState<number>(0);

	// methods
	const clickStart = useCallback(() => {
		startTimeRef.current = new Date();
		endTimeRef.current = null;
		setDuration(0);
	}, []);

	const clickEnd = useCallback(() => {
		endTimeRef.current = new Date();
		const end = endTimeRef.current;
		const startTime = startTimeRef.current;
		if (end && startTime) {
			const diff = (end.getTime() - startTime.getTime()) / 1000; // duration in seconds
			setDuration(diff);
		} else {
			setDuration(0);
		}
		endTimeRef.current = null;
		startTimeRef.current = null;
	}, []);

	return (
		<div className="App">
			<button
				onClick={() => {
					clickStart();
				}}
				style={{ marginRight: 8 }}
			>
				start
			</button>
			<button
				onClick={() => {
					clickEnd();
				}}
			>
				end
			</button>
			<p>Time duration between clicks: {duration} seconds</p>
		</div>
	);
}

export default Task2Page;
