import htmlstring from "./demo.html?raw";

const ExampleScene = () => {
  return (
    <div
      style={{ width: "100%" }}
      dangerouslySetInnerHTML={{ __html: htmlstring }}
    />
  );
};

export default ExampleScene;
