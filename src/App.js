import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todo, setTodo] = useState([]);
  // fetch("https://jsonplaceholder.typicode.com/todos")

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then(function (response) {
        // handle success
        console.log("response", response.data);
        setTodo(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log("error", error);
      });
  }, []);

  // console.log("data of json", data);
  // console.log("data of json ", response.json());

  // setData([]);
  // https://jsonplaceholder.typicode.com/todos

  return (
    <div>
      {todo.map((v, i) => (
        <div className="main" key={i}>
          <div className="todo">
            <h1>id: {v.id} </h1>
            <h6>Title :{v.title} </h6>
            <p> simple id :{v.userId}</p>
            <span>thumbnailUrl {v.thumbnailUrl} </span>
            <p>{v.url} </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

//  Todo app code with working condition

// const [name, setName] = useState("vinod");
// const [todos, setTodos] = useState(["test1", "test2", "vinod", 124, true]);
// const [value, setValue] = useState("");

/* <div>

<h1>todo app</h1>

<ul>
  {todos.map((eachPost, index) => (
    <li key={index}> {eachPost}</li>
  ))}
  {/* <p> {value}</p> */

//   <input
//     type="text"
//     onChange={(e) => setValue(e.target.value)}
//     value={value}
//   />

//   <button
//     onClick={() => {
//       setTodos([...todos, value]);
//       setValue("");
//     }}
//   >
//     Add todo
//   </button>

// </ul>
// </div>
//  */}

// import { Button, Checkbox, Form, Input } from "antd";

// function App() {
//   const onFinish = (values) => {
//     console.log("Success:", values);
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };
//   return (
//     <div className="App">
//       {/* const Form = () => ( */}
//       <Form
//         name="basic"
//         labelCol={{
//           span: 8,
//         }}
//         wrapperCol={{
//           span: 16,
//         }}
//         style={{
//           maxWidth: 600,
//         }}
//         initialValues={{
//           remember: true,
//         }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//       >
//         <Form.Item
//           label="Username"
//           name="username"
//           rules={[
//             {
//               required: true,
//               message: "Please input your username!",
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[
//             {
//               required: true,
//               message: "Please input your password!",
//             },
//           ]}
//         >
//           <Input.Password />
//         </Form.Item>

//         <Form.Item
//           name="remember"
//           valuePropName="checked"
//           wrapperCol={{
//             offset: 8,
//             span: 16,
//           }}
//         >
//           <Checkbox>Remember me</Checkbox>
//         </Form.Item>

//         <Form.Item
//           wrapperCol={{
//             offset: 8,
//             span: 16,
//           }}
//         >
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//       )
//     </div>
//   );
// }
