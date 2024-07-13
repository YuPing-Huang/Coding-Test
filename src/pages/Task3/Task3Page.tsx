import codePng from "~/assets/code.png";
import codePng2 from "~/assets/code2.png";
import { Container, NoteText, SubTitle, Title } from "~/pages/Task3/styles/page";

/**
 * Task 3
 * 1. Simply describe what "function1" will do.
 * 2. Can we stop what "function1" is doing? How?
 * 3. How to optimize this snippet?
 * @returns
 */
function Task3Page(): JSX.Element {
	return (
		<div>
			<Title>1. Simply describe what "function1" will do.</Title>
			<span>
				A: "function1" is a Redux-Saga generator function that performs an asynchronous operation, specifically making an HTTP POST request.
				Here’s a step-by-step breakdown of what it does:
			</span>
			<ol>
				<li>
					<SubTitle>Abort Controller Initialization:</SubTitle>
				</li>
				<ul>
					<li>
						<NoteText>Initializes an AbortController</NoteText> instance to allow the request to be canceled if needed.
					</li>
				</ul>
				<li>
					<SubTitle>Configuration Setup:</SubTitle>
				</li>
				<ul>
					<li>
						<NoteText>Sets up the configuration</NoteText> for the HTTP POST request, including the URL, method, payload, and the abort signal.
					</li>
				</ul>
				<li>
					<SubTitle>Try Block:</SubTitle>
				</li>
				<ul>
					<li>
						<NoteText>Make the Request</NoteText>:
					</li>
					<ul>
						<li>Uses the call effect to make the HTTP POST request with the given configuration.</li>
					</ul>
				</ul>
				<ul>
					<li>
						<NoteText>Dispatch Success Action</NoteText>:
					</li>
					<ul>
						<li>If the request is successful, it dispatches an action using the put effect.</li>
					</ul>
				</ul>
				<li>
					<SubTitle>Catch Block:</SubTitle>
				</li>
				<ul>
					<li>
						<NoteText>Error Handling</NoteText>:
					</li>
					<ul>
						<li>If the request fails and an error response is received, it dispatches a different action using the put effect.</li>
					</ul>
				</ul>
				<li>
					<SubTitle>Finally Block:</SubTitle>
				</li>
				<ul>
					<li>
						<NoteText>Handle Aborted Request</NoteText>:
					</li>
					<ul>
						<li>If the request was aborted, it dispatches another action using the put effect.</li>
					</ul>
				</ul>
			</ol>
			<Title>2. Can we stop what "function1" is doing? How?</Title>
			<span>
				A: Yes, <NoteText>Calling "function2"</NoteText>, will set the aborted flag on the ctrl signal, causing the HTTP request in function1 to
				be canceled.
			</span>
			<Title>3. How to optimize this snippet?</Title>
			<ol>
				<li>
					<SubTitle>It uses a race effect to handle two competing tasks:</SubTitle>
				</li>
				<ul>
					<li>A timeout is used to abort the request if it takes longer than 2 seconds.</li>
				</ul>
				<li>
					<SubTitle>Error Handling:</SubTitle>
				</li>
				<ul>
					<li>Different types of errors (cancellation, HTTP errors, network errors) are handled separately.</li>
				</ul>
			</ol>
			<Container>
				<img src={codePng2} alt="code2" />
				<div className="inner">
					<NoteText>Optimize</NoteText>
					<div>{`<`}=========</div>
				</div>
				<img src={codePng} alt="code" />
			</Container>
		</div>
	);
}

export default Task3Page;
