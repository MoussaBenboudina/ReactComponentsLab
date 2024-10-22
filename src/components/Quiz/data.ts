type Question = {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  ans: number;
};
export const data: Question[] = [
  {
    question: "Which method is used to create a React component?",
    option1: "createComponent()",
    option2: "createElement()",
    option3: "component()",
    option4: "newComponent()",
    ans: 2,
  },
  {
    question: "What is JSX in React?",
    option1: "JS XML",
    option2: "JS Extension",
    option3: "JS Expression",
    option4: "JS Compiler",
    ans: 1,
  },
  {
    question: "Which hook is used to manage state?",
    option1: "useEffect",
    option2: "useState",
    option3: "useRef",
    option4: "useMemo",
    ans: 2,
  },
  {
    question: "Lifecycle method after component mounts?",
    option1: "componentDidUpdate",
    option2: "componentWillUnmount",
    option3: "componentDidMount",
    option4: "constructor",
    ans: 3,
  },
  {
    question: "Pass data from parent to child?",
    option1: "Using props",
    option2: "Using state",
    option3: "Using context",
    option4: "Using functions",
    ans: 1,
  },
  {
    question: "What is the virtual DOM?",
    option1: "Copy of real DOM",
    option2: "Unchanging DOM",
    option3: "New version of DOM",
    option4: "DOM modifying function",
    ans: 1,
  },
  {
    question: "Import a component in React?",
    option1: "import { Component }",
    option2: "import Component",
    option3: "require('Component')",
    option4: "load(Component)",
    ans: 1,
  },
  {
    question: "Handle side effects in functional components?",
    option1: "Using useState",
    option2: "Using useEffect",
    option3: "Using useMemo",
    option4: "Using useCallback",
    ans: 2,
  },
  {
    question: "Hook for referencing DOM elements?",
    option1: "useRef",
    option2: "useEffect",
    option3: "useState",
    option4: "useMemo",
    ans: 1,
  },
  {
    question: "Default state of a new React component?",
    option1: "Undefined",
    option2: "Null",
    option3: "Empty Object",
    option4: "Initial state in constructor",
    ans: 4,
  },
  {
    question: "'key' prop in React?",
    option1: "Identifies elements",
    option2: "Passes data to children",
    option3: "Defines CSS",
    option4: "Sets state in component",
    ans: 1,
  },
  {
    question: "Conditionally render a component?",
    option1: "Conditional inside JSX",
    option2: "componentWillUpdate",
    option3: "componentDidMount",
    option4: "JavaScript switch statement",
    ans: 1,
  },
  {
    question: "Which is a controlled component?",
    option1: "Own state control",
    option2: "Input data from DOM",
    option3: "State controlled by React",
    option4: "Handles input via props",
    ans: 3,
  },
  {
    question: "Purpose of useReducer hook?",
    option1: "Manage complex state",
    option2: "Replace useState",
    option3: "Handle HTTP requests",
    option4: "Reduce re-renders",
    ans: 1,
  },
  {
    question: "Prevent unnecessary re-renders?",
    option1: "shouldComponentUpdate",
    option2: "componentWillUpdate",
    option3: "componentDidMount",
    option4: "componentWillUnmount",
    ans: 1,
  },
];
