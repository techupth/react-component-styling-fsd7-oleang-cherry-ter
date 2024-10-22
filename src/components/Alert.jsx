// Start coding here
import { Angry, TriangleAlert, CircleAlert, CircleCheckBig } from "lucide-react";
export function Alert({ type }) {
  const alertBox = [
    {
      type: "error",
    },
    {
      type: "warning",
    },
    {
      type: "info",
    },
    {
      type: "success",
    },
  ];
  return (
    <>
      <div>
        {type === "error" ? (
          <div className=" bg-red-200 w-[500px] h-[50px] flex items-center font-bold rounded-md gap-3 px-4">
            <Angry className="text-red-500" size={20}/>This is {alertBox[0].type} alert box
          </div>
        ) : type === "warning" ? (
          <div className=" bg-orange-200 w-[500px] h-[50px] flex items-center font-bold rounded-md gap-3 px-4">
            <TriangleAlert className="text-orange-500" size={20}/> This is {alertBox[1].type} alert box
          </div>
        ) : type === "info" ? (
          <div className=" bg-yellow-100 w-[500px] h-[50px] flex items-center font-bold rounded-md gap-3 px-4">
            <CircleAlert className="text-orange-400" size={20}/>This is {alertBox[2].type} alert box
          </div>
        ) : (
          <div className=" bg-green-200 w-[500px] h-[50px] flex items-center font-bold rounded-md gap-3 px-4">
            <CircleCheckBig className="text-green-600" size={20}/>This is {alertBox[3].type} alert box
          </div>
        )}
      </div>
    </>
  );
}
