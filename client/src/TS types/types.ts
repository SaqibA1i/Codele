import { NOTIFICATION_TYPE } from "react-notifications-component/dist/src/typings";

export enum CodeType {
    ALGORITHM = "Algorithm",
    LANGUAGE = "Languange",
    OPTIONS = "Options"
}

export enum LOCAL_STORAGE {
    STATE = "state",
    DATE = "date",
    SUCCESS = "success"
}
export const Algorithms = [
    "Binary Search Algorithm",
    "Breadth First Search (BFS) Algorithm",
    "Depth First Search (DFS) Algorithm",
    "Merge Sort Algorithm",
    "Quicksort Algorithm",
    "Kruskal’s Algorithm",
    "Floyd Warshall Algorithm",
    "Dijkstra’s Algorithm",
    "Bellman Ford Algorithm",
    "Kadane’s Algorithm",
    "Lee Algorithm",
    "Flood Fill Algorithm", ,
    "Floyd’s Cycle Detection Algorithm",
    "Union Find Algorithm",
    "Topological Sort Algorithm",
    "KMP Algorithm",
    "Insertion Sort Algorithm",
    "Bubble Sort Algorithm",
    "Selection Sort Algorithm",
    "Counting Sort Algorithm",
    "Heap Sort Algorithm",
    "Kahn’s Topological Sort Algorithm",
    "Huffman Coding Compression Algorithm",
    "Quickselect Algorithm",
    "Boyer–Moore Majority Vote Algorithm",
    "Euclid’s Algorithm"
];

export enum Language {
    BASH = 'bash',
    C = 'c',
    CLOJURE = 'clojure',
    CPP = 'cpp',
    CSHARP = 'csharp',
    DART = 'dart',
    ELIXIR = 'elixir',
    ELM = 'elm',
    ERLANG = 'erlang',
    FSHARP = 'fsharp',
    GRAPHQL = 'graphql',
    GO = 'go',
    GROOVY = 'groovy',
    HASKELL = 'haskell',
    HTML = 'html',
    JAVA = 'java',
    JAVASCRIPT = 'javascript',
    JSX = 'jsx',
    JULIA = 'julia',
    KOTLIN = 'kotlin',
    LISP = 'lisp',
    MAKEFILE = 'makefile',
    MATLAB = 'matlab',
    OBJECTIVEC = 'objectivec',
    OCAML = 'ocaml',
    PHP = 'php',
    PYTHON = 'python',
    R = 'r',
    RUBY = 'ruby',
    RUST = 'rust',
    SCALA = 'scala',
    SQL = 'sql',
    SWIFT = 'swift',
    TSX = 'tsx',
    TYPESCRIPT = 'typescript'
}
// The CodeData doesnt have the answer, thats only in the backend
//  So here is only the stuff to display to the user
export type CodeData = {
    type: CodeType,
    data: string,
    options?: string[], // if the question is a multiple choice one
    language: Language,
    answer: string
}

export const CodeTheme = {
    a11yDark: 'a11y-dark',
    a11yLight: 'a11y-light',
    anOldHope: 'an-old-hope',
    androidstudio: 'androidstudio',
    arta: 'arta',
    atomOneDark: 'atom-one-dark',
    atomOneLight: 'atom-one-light',
    codepen: 'codepen',
    dracula: 'dracula',
    far: 'far',
    github: 'github',
    googlecode: 'googlecode',
    hopscotch: 'hopscotch',
    hybrid: 'hybrid',
    irBlack: 'ir-black',
    monoBlue: 'mono-blue',
    monokaiSublime: 'monokai-sublime',
    monokai: 'monokai',
    nord: 'nord',
    obsidian: 'obsidian',
    ocean: 'ocean',
    paraisoDark: 'paraiso-dark',
    paraisoLight: 'paraiso-light',
    pojoaque: 'pojoaque',
    purebasic: 'purebasic',
    railscast: 'railscast',
    rainbow: 'rainbow',
    shadesOfPurple: 'shades-of-purple',
    solarizedDark: 'solarized-dark',
    solarizedLight: 'solarized-light',
    sunburst: 'sunburst',
    tomorrowNightBlue: 'tomorrow-night-blue',
    tomorrowNightBright: 'tomorrow-night-bright',
    tomorrowNightEighties: 'tomorrow-night-eighties',
    tomorrowNight: 'tomorrow-night',
    tomorrow: 'tomorrow',
    vs2015: 'vs2015',
    xt256: 'xt256',
    zenburn: 'zenburn'
};

export type Notification = {
    type: NOTIFICATION_TYPE,
    message: String,
    time?: number
}
