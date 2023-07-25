import { useState } from "react";
import ParentDemo from "./ContextDemo";
import "./test.css";
interface ChildPorps {
	state: {
		name: string;
		age: number;
		gender?: string;
		count?: number;
	};
	hobby: Array<number>;
	getCount: (val: any) => void;
}

const Child = (props: ChildPorps) => {
	const { getCount } = props;
	console.log(props);
	const [count, setCount] = useState<number>(0);
	const addCount = (val: number) => {
		setCount(val);
		getCount(val);
	};

	// const handleMsg = (value: any) => {
	//    props.state.name=value
	// }
	return (
		<div className="childContent">
			我是子组件，积分为{props.state.count}
			<p>名字{props.state.name}</p>
			<p>年龄{props.state.age}</p>
			<p>数字：{count}</p>
			<button onClick={() => addCount(count + 1)}>数字递增</button>
			<ParentDemo />
		</div>
	);
};

interface PaentProps {
	name: string;
}

function Parent(props: PaentProps) {
	console.log(props);
	const [num, setNum] = useState(0);
	// const getMessage = (data: string)  => {
	//     console.log('父组件接收数据', data)
	//   }
	const [state] = useState({
		name: "父组件",
		age: 18,
		count: 996
	});
	const getChildCount = (val: number) => {
		setNum(val);
	};

	return (
		<div className="parentContent">
			<p>父组件</p>
			<p>子组件传过来的数字{num}</p>
			<Child state={{ ...state }} hobby={[1, 2, 3, 4]} getCount={getChildCount}></Child>
		</div>
	);
}

export default Parent;
