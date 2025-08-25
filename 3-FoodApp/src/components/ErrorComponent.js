import { useRouteError } from "react-router";

const ErrorComponent = () => {
  const { data } = useRouteError();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#aeaeae",
        height:"100vh",
        fontSize:20,
        color:"black",
        gap:10
      }}
    >
      <div> Oops Something Went Wrong</div>
      <div>{data}</div>
    </div>
  );
};

export default ErrorComponent;
