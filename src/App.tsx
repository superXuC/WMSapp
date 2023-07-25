import { useEffect, useRef, useState } from "react"
import { ReactComponent as ReactLogo } from "./assets/react.svg"
import viteLogo from "./assets/vite.svg"
import "./App.css"
import Parent from "./pages/DemoEffect"

interface NameFact {
	name: number;
}
function App(props: NameFact) {
	console.log(props);
	const [num, setNum] = useState(0);
	const docno = useRef<HTMLInputElement>(null);
	const handerSubmit = () => {
		console.log(docno.current);
	};
	useEffect(() => {
		if (docno) {
			docno.current && docno.current?.focus();
		}
	});
	return (
		<div className="box">
			<a href="">
				{" "}
				<ReactLogo />{" "}
			</a>
			<a href="">
				<img src={viteLogo} alt="" className="logo" />
			</a>
			<input type="text" ref={docno} />
			<button onClick={() => handerSubmit()}>提交</button>
			<p>{num}</p>
			<button
				onClick={() => {
					setNum(num + 1);
				}}
			>
				+1
			</button>
			<Parent name={"我是参数"} />
		</div>
	);
}
export default App;
