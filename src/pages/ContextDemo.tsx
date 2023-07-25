import { createContext, useContext } from "react";

const MyContext = createContext(""); //要提供一个默认值

const ParentDemo = () => {
	const sharedData = "这是祖先组件传给后代组件的值";

	return (
		<MyContext.Provider value={sharedData}>
			<Child />
		</MyContext.Provider>
	);
};

const Child = () => {
	const value = useContext(MyContext);
	return <div>{value}</div>;
	// 和下面这种获得传递值的方法等效，只不过react18多了一个useContext来获取更加方便
	// return (
	//   <MyContext.Consumer>
	//     {value => <div>{value}</div>}
	//   </MyContext.Consumer>
	// )
};

export default ParentDemo;
