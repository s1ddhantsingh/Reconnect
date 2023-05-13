//! dependency import
import React from "react";
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from "recoil";
//! component imports
import MainContent from "./components/MainContent";

const App = () => {
	return (
		<RecoilRoot>
			{/* <h1 className="text-3xl font-bold underline flex justify-center items-center">
        VibeStir Chat-Feature???
      </h1> */}
			<MainContent />
		</RecoilRoot>
	);
};

export default App;
