import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Createpost from "./components/Createpost";
import Postlist from "./components/Postlist";
import { useState } from "react";
import PostListProvider from "./store/postlist-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("");

  // const handlehomebtn = (homebtnselected) => {
  //   console.log(`button selected is ${homebtnselected}`);
  //   setSelectedTab(homebtnselected);
  // };

  // const handlecreatepostbtn = (createpostbtnselected) => {
  //   console.log(`button selected is ${createpostbtnselected}`);
  //   setSelectedTab(createpostbtnselected);
  // };
  return (
    <PostListProvider>
      <div className="box-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="container">
          <Header></Header>
          {selectedTab === "home" ? (
            <Postlist></Postlist>
          ) : (
            <Createpost></Createpost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
