
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "Im am an h1 tag"),React.createElement("h2", {}, "Im am an h2 tag")]
    )
);
// const heading = React.createElement("h1", { id: "heading", xyz: "ABC" }, "Hello world from React");
console.log(parent);// return object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);