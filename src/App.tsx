// import { useEffect, useState } from "react";
// import "./App.css";
// import { createElement } from "react";
import data from "./schema.json";
// import Factory from "./factory/Factory";
// import parse from "html-react-parser";
// import { Interweave, Markup } from "interweave";

import Factory, { FormField } from "./factory/Factory";
import { useEffect, useState } from "react";

// function App() {
//   const [component, setComponent] = useState<string[]>([]);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   useEffect(() => {
//     fetchComponent();
//   }, []);

//   const handleChange = (v: string, key: string) => {
//     console.log(v, key);
//     if (key === "firstName") {
//       setFirstName(v);
//     }
//     if (key === "lastName") {
//       setLastName(v);
//     }
//   };
// console.log({component})
//   const fetchComponent = () => {
//     data.map((item) => {
//       const data1 = new Factory(item.component);
//       const ans = data1.getComponent();
//       setComponent((prev) => [...prev, ans]);
//     });
//   };
//   return (
//     <div className="space-y-8">
//       <div className="flex gap-16">
//         {data.map((item, idx) => (
//           <div
//             className="flex gap-x-8"
//             key={idx}
//             id={idx.toString()}
//             style={{ display: "flex" }}
//           >
//             {createElement("input", {
//               onChange: (e) => handleChange(e.target.value, item.key),
//               type: "text",
//               placeholder: `Enter your ${item.key}`,
//               className:
//                 "mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm",
//               name: item.key,
//             })}
//             {/* <div>{component.length >= 1 && parse(component[0])}</div> */}
//           </div>
//         ))}
//       </div>
//       <div className="flex gap-8">
//         <div>First Name: {firstName.toUpperCase()}</div>
//         <div>Last Name: {lastName.toUpperCase()}</div>
//       </div>
//     </div>
//   );
// }

// export default App;

const App = () => {
  const [components, setComponents] = useState<any[]>([]);
  const [output, setOutput] = useState<any>({});

  useEffect(() => {
    createComponent();
  }, []);

  const handleChange = (schema: FormField, value: string) => {
    console.log({ schema, value });
    if (schema.component === "Button") {
      handleSubmit();
    }
    setOutput((prev) => ({ ...prev, [schema.key]: value }));
  };

  const handleSubmit = () => {
    let i;
    for (i = 0; i <= data.length; i++) {
      data[i].value = output[data[i].key] ?? '';
      console.log({data})
    } 
  };

  console.log({ output, data });
  const createComponent = () => {
    const componentArray = data.map((schema) => {
      const component = new Factory(schema);
      return { Component: component.create(), Schema: schema };
    });
    setComponents(componentArray);
  };

  return (
    <div>
      {components.map((Component) => (
        <Component.Component
          onChange={(e: any) => handleChange(Component.Schema, e.target.value)}
        />
      ))}
    </div>
  );
};

export default App;
